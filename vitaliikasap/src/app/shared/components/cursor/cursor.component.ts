import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-cursor',
  // New Angular 20 style method:
  styles: [`
    .cursor {
      pointer-events: none;
      position: fixed;
      z-index: 10000;
      left: 0;
      top: 0;
      width: 40px;
      height: 40px;
      border: 2px solid #7c3aed;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: background 0.2s;
      mix-blend-mode: difference;
      will-change: transform;
      background: rgba(0, 0, 0, 0.0);
    }

    .cursor.active {
      background: #ffff;
      mix-blend-mode: difference;
      border: none;
    }
  `],
  template: `
    <div class="cursor" #cursorRef></div>
  `
})
export class CursorComponent implements AfterViewInit {
  private cursor!: HTMLElement;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.cursor = this.el.nativeElement.querySelector('.cursor');
  }

  // Listen to mouse movement
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    gsap.to(this.cursor, {
      x: event.clientX,
      y: event.clientY,
      duration: 0.18,
      ease: 'power3.out'
    });
  }

  // Example: change cursor on link hover (optional)
  @HostListener('document:mouseover', ['$event'])
  onMouseOver(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.classList.contains('cursor-hover')) {
      gsap.to(this.cursor, { scale: 2, duration: 0.2, ease: 'power3.out' });
      this.cursor.classList.add('active'); // For bg or other effects
    }
  }

  @HostListener('document:mouseout', ['$event'])
  onMouseOut(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.classList.contains('cursor-hover')) {
      gsap.to(this.cursor, { scale: 1, duration: 0.2, ease: 'power3.out' });
      this.cursor.classList.remove('active');
    }
  }
}
