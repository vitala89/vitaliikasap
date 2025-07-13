import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-skill-circle',
  standalone: true,
  template: `
    <svg #svgElement class="w-20 h-20" viewBox="0 0 100 100">
      <circle
        class="stroke-neutral-200 dark:stroke-neutral-700"
        cx="50" cy="50" r="45"
        fill="none"
        stroke-width="6"
      />
      <circle
        #progressCircle
        class="stroke-indigo-400"
        cx="50" cy="50" r="45"
        fill="none"
        stroke-width="6"
        [attr.stroke-dasharray]="circumference"
        stroke-dashoffset="283"
        stroke-linecap="round"
      />
    </svg>
  `
})
export class SkillCircleComponent implements OnInit, AfterViewInit {
  @Input() value = 0;
  @ViewChild('svgElement', { static: true }) svgElement!: ElementRef<SVGElement>;
  @ViewChild('progressCircle', { static: true }) progressCircle!: ElementRef<SVGCircleElement>;

  readonly circumference = 2 * Math.PI * 45;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Only run animations in browser
    if (isPlatformBrowser(this.platformId)) {
      // Set initial state
      gsap.set(this.svgElement.nativeElement, {
        opacity: 0,
        scale: 0.8,
        rotation: -90
      });
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.animateCircle();
    }
  }

  private animateCircle() {
    const targetOffset = this.circumference - (this.value / 100) * this.circumference;

    // Create timeline for entrance and progress animation
    const tl = gsap.timeline();

    // Entrance animation
    tl.to(this.svgElement.nativeElement, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    });

    // Progress animation
    tl.to(this.progressCircle.nativeElement, {
      strokeDashoffset: targetOffset,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.3");

    // Add a subtle bounce at the end
    tl.to(this.svgElement.nativeElement, {
      scale: 1.1,
      duration: 0.15,
      ease: "power2.out"
    }).to(this.svgElement.nativeElement, {
      scale: 1,
      duration: 0.15,
      ease: "power2.out"
    });
  }
}
