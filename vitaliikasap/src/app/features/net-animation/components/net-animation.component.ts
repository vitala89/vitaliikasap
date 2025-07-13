import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  effect,
  computed,
  inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { themeSignal } from '../../../shared/services/theme.service';

interface ICircle {
  pos: { x: number; y: number };
  radius: number;
  color: string;
  opacity: number;
  draw(ctx: CanvasRenderingContext2D): void;
}

@Component({
  selector: 'app-net-animation',
  standalone: true,
  template: `
    <canvas
      #backgroundCanvas
      class="fixed top-0 left-0 w-full h-full -z-100 pointer-events-none bg-transparent dark:bg-neutral-700"
    ></canvas>
  `
})
export class NetAnimationComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  @ViewChild('backgroundCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private width: number = 0;
  private height: number = 0;
  private ctx!: CanvasRenderingContext2D;
  private points: any[] = [];
  private pointDistance: number = 45;
  private pointRadius: number = 2;
  private animateHeader: boolean = true;
  private target = { x: 0, y: 0 };
  private raf: number = 0;

  // Simple theme colors
  private readonly themeColors = computed(() => {
    const isDark = themeSignal() === 'dark';
    return {
      primary: isDark ? '#8b5cf6' : '#7c3aed',      // emerald-500 / emerald-600
      secondary: isDark ? '#10b981' : '#059669',    // violet-500 / violet-600
      accent: isDark ? '#ec4899' : '#db2777'        // pink-500 / pink-600
    };
  });

  constructor() {
    // Simple effect to update colors when theme changes
    effect(() => {
      if (this.ctx && this.points.length > 0) {
        this.updateColors();
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initHeader();
      this.initAnimation();
      this.setupEventListeners();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.cleanup();
    }
  }

  private updateColors(): void {
    const colors = this.themeColors();
    this.points.forEach(point => {
      if (point.circle) {
        point.circle.color = colors.primary;
      }
    });
  }

  private setupEventListeners(): void {
    const mouseMove = (e: MouseEvent) => {
      this.target.x = e.clientX;
      this.target.y = e.clientY;
    };

    const resize = () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      const canvas = this.canvasRef.nativeElement;
      canvas.width = this.width;
      canvas.height = this.height;
      this.points.forEach(p => gsap.killTweensOf(p));
      this.initPoints();
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('resize', resize);

    this.eventListeners = [
      { element: window, event: 'mousemove', handler: mouseMove as (event: Event) => void },
      { element: window, event: 'resize', handler: resize }
    ];
  }

  private eventListeners: Array<{ element: EventTarget; event: string; handler: EventListener }> = [];

  private cleanup(): void {
    this.eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    this.eventListeners = [];

    if (this.raf) {
      cancelAnimationFrame(this.raf);
    }

    this.points.forEach(p => gsap.killTweensOf(p));
  }

  private initHeader(): void {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    const canvas = this.canvasRef.nativeElement;
    canvas.width = this.width;
    canvas.height = this.height;
    this.ctx = canvas.getContext('2d')!;

    this.initPoints();
  }

  private initAnimation(): void {
    this.animate();
  }

  private animate = (): void => {
    if (this.animateHeader) {
      this.drawPoints();
    }
    this.raf = requestAnimationFrame(this.animate);
  };

  private initPoints(): void {
    this.points = [];

    for (let x = 0; x <= this.width / this.pointDistance; x++) {
      for (let y = 0; y < this.height / this.pointDistance; y++) {
        const px = x * this.pointDistance;
        const py = y * this.pointDistance;
        const p = { x: px, originX: px, y: py, originY: py };
        this.points.push(p);
      }
    }

    // Find 5 nearest neighbors for each point
    for (let i = 0; i < this.points.length; i++) {
      const closest: any[] = [];
      const p1 = this.points[i];

      for (let j = 0; j < this.points.length; j++) {
        const p2 = this.points[j];
        if (p1 !== p2) {
          if (closest.length < 5) {
            closest.push(p2);
          } else {
            let maxDist = this.getDistance(p1, closest[0]);
            let idx = 0;
            for (let k = 1; k < 5; k++) {
              const d = this.getDistance(p1, closest[k]);
              if (d > maxDist) {
                maxDist = d;
                idx = k;
              }
            }
            if (this.getDistance(p1, p2) < maxDist) {
              closest[idx] = p2;
            }
          }
        }
      }
      p1.closest = closest;
    }

    // Attach Circle objects with current theme colors
    const colors = this.themeColors();
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].circle = new this.Circle(this.points[i], this.pointRadius, colors.primary);
    }

    // Animate each point
    for (let i = 0; i < this.points.length; i++) {
      this.shiftPoint(this.points[i]);
    }
  }

  private drawPoints(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const colors = this.themeColors();

    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i];
      const dist = this.getDistance(this.target, point);

      // Opacity based on mouse distance
      if (dist < 4000) {
        point.opacity = 0.3;
        point.circle.opacity = 1;
      } else if (dist < 20000) {
        point.opacity = 0.1;
        point.circle.opacity = 1;
      } else if (dist < 40000) {
        point.opacity = 0.02;
        point.circle.opacity = 0.8;
      } else {
        point.opacity = 0;
        point.circle.opacity = 0.7;
      }

      // Update colors
      point.circle.color = colors.primary;

      this.drawLines(point, colors);
      point.circle.draw(this.ctx);
    }
  }

  private shiftPoint(p: any): void {
    gsap.to(p, {
      duration: 1 + Math.random(),
      x: p.originX + Math.random() * (this.pointDistance / 2),
      y: p.originY + Math.random() * (this.pointDistance / 2),
      ease: "circ.inOut",
      onComplete: () => this.shiftPoint(p)
    });
  }

  private drawLines(p: any, colors: any): void {
    if (!p.closest) return;

    for (let i = 0; i < p.closest.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(p.closest[i].x, p.closest[i].y);

      // Convert hex to rgb for alpha
      const hex = colors.primary.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);

      this.ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
      this.ctx.stroke();
    }
  }

  private Circle = class Circle implements ICircle {
    pos: { x: number; y: number };
    radius: number;
    color: string;
    opacity: number;

    constructor(pos: { x: number; y: number }, rad: number, color: string) {
      this.pos = pos;
      this.radius = rad;
      this.color = color;
      this.opacity = 0.7;
    }

    draw(ctx: CanvasRenderingContext2D): void {
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);

      // Convert hex to rgb for alpha
      const hex = this.color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);

      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
      ctx.fill();
    }
  };

  private getDistance(p1: any, p2: any): number {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
}
