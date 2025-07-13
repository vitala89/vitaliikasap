import { Component, ElementRef, EventEmitter, Output, ViewChild, AfterViewInit, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-intro-overlay',
  standalone: true,
  template: `
    <div
      #wrapper
      class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 transition-all duration-1000"
      [class.opacity-0]="hide()"
      [class.pointer-events-none]="hide()"
    >
      <div class="flex flex-col items-center gap-4 select-none">
        <h1 #name class="text-[64px] md:text-[96px] font-main font-extrabold tracking-wide opacity-0">
          {{ nameText() }}
        </h1>
        <div #subtitle class="text-3xl font-semibold text-indigo-400 opacity-0 translate-x-[-100px]">
          {{ professionText() }}
        </div>
      </div>
    </div>
  `
})
export class IntroOverlayComponent implements AfterViewInit {
  @ViewChild('name', { static: true }) nameEl!: ElementRef<HTMLHeadingElement>;
  @ViewChild('subtitle', { static: true }) subtitleEl!: ElementRef<HTMLDivElement>;
  @ViewChild('wrapper', { static: true }) wrapperEl!: ElementRef<HTMLDivElement>;


  @Output() finished = new EventEmitter<void>();


  hide = signal(false);
  nameText = signal('VITALII KASAP');
  professionText = signal('FRONTEND ENGINEER');
  private platformId = inject(PLATFORM_ID);


  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.finished.emit(), 100);
      return;
    }


    const { gsap } = await import('gsap/all');


    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' }
    });


    // Animate name with circuit-like animation
    await this.animateLettersCircuit(this.nameEl.nativeElement, {
      stagger: 0.15,
      borderDuration: 0.8,
      fillDuration: 0.6,
      delay: 0.3
    });


    // Animate subtitle sliding from left to center
    await this.animateSubtitleFromLeft(this.subtitleEl.nativeElement);


    // Small delay before starting scale animation
    await new Promise(resolve => setTimeout(resolve, 200));


    // Scale each letter of both texts (preserving existing styles)
    await this.scaleLettersSequentially();


    // Hide all texts smoothly
    await this.hideAllTexts();


    // Hide intro wrapper
    tl.to(this.wrapperEl.nativeElement, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        this.wrapperEl.nativeElement.style.pointerEvents = 'none';
        this.finished.emit();
      }
    });
  }


  /**
   * Animate subtitle sliding from left to center
   */
  private async animateSubtitleFromLeft(element: HTMLElement): Promise<void> {
    const { gsap } = await import('gsap/all');


    // Split subtitle into letters for later scaling (preserving color)
    const originalText = element.textContent || '';
    element.innerHTML = originalText
      .split('')
      .map(letter => {
        if (letter === ' ') {
          return '<span class="inline-block">&nbsp;</span>';
        }
        return `<span class="inline-block scale-letter">${letter}</span>`;
      })
      .join('');


    return new Promise((resolve) => {
      gsap.to(element, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: resolve
      });
    });
  }


  /**
   * Scale each letter from left to right for both name and subtitle
   */
  private async scaleLettersSequentially(): Promise<void> {
    const { gsap } = await import('gsap/all');


    // Get letters from both elements (they should already be split)
    const nameLetters = Array.from(this.nameEl.nativeElement.querySelectorAll('span')) as HTMLElement[];
    const subtitleLetters = Array.from(this.subtitleEl.nativeElement.querySelectorAll('span.scale-letter')) as HTMLElement[];


    // Combine all letters in order (name first, then subtitle)
    const allLetters = [...nameLetters, ...subtitleLetters];


    return new Promise((resolve) => {
      const tl = gsap.timeline({ onComplete: resolve });


      allLetters.forEach((letter, index) => {
        // Skip spaces
        if (letter.textContent === ' ' || letter.textContent === '\u00A0') {
          return;
        }


        tl.to(letter, {
          scale: 4.3,
          duration: 0.2,
          ease: 'back.out(1.7)',
          yoyo: true,
          repeat: 1,
          transformOrigin: 'center center'
        }, index * 0.08);
      });
    });
  }


  /**
   * Hide all texts smoothly
   */
  private async hideAllTexts(): Promise<void> {
    const { gsap } = await import('gsap/all');


    return new Promise((resolve) => {
      const tl = gsap.timeline({ onComplete: resolve });


      tl.to([this.nameEl.nativeElement, this.subtitleEl.nativeElement], {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power2.inOut',
        stagger: 0.1
      });
    });
  }


  /**
   * Circuit-like animation for letters - first draws border, then fills inside
   */
  private async animateLettersCircuit(
    element: HTMLElement,
    options: {
      stagger?: number;
      borderDuration?: number;
      fillDuration?: number;
      delay?: number;
      borderColor?: string;
      fillColor?: string;
    } = {}
  ): Promise<void> {
    const { gsap } = await import('gsap/all');


    const {
      stagger = 0.1,
      borderDuration = 0.8,
      fillDuration = 0.6,
      delay = 0,
      borderColor = '#6366f1', // indigo-500
      fillColor = '#6366f1'     // indigo-500
    } = options;


    // Store original text
    const originalText = element.textContent || '';


    // Make the element visible but keep letters hidden
    element.style.opacity = '1';


    // Split text into spans for each character with special styling
    element.innerHTML = originalText
      .split('')
      .map(letter => {
        if (letter === ' ') {
          return '<span class="inline-block">&nbsp;</span>';
        }
        return `<span class="inline-block letter-circuit scale-letter" style="
         color: transparent;
         -webkit-text-stroke: 0px ${borderColor};
         text-stroke: 0px ${borderColor};
         opacity: 1;
         transform: translateY(20px);
       ">${letter}</span>`;
      })
      .join('');


    const chars = element.querySelectorAll('span.letter-circuit');


    // Animate each letter with circuit effect
    return new Promise((resolve) => {
      const tl = gsap.timeline({
        onComplete: resolve
      });


      chars.forEach((char, index) => {
        const letterTimeline = gsap.timeline();


        // Phase 1: Move letter to position and start border animation
        letterTimeline.to(char, {
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        }, 0);


        // Phase 2: Animate border stroke (circuit drawing)
        letterTimeline.to(char, {
          webkitTextStroke: `2px ${borderColor}`,
          textStroke: `2px ${borderColor}`,
          duration: borderDuration,
          ease: 'power2.inOut'
        }, 0.2);


        // Phase 3: Fill the inside with color
        letterTimeline.to(char, {
          color: fillColor,
          duration: fillDuration,
          ease: 'power2.out'
        }, borderDuration * 0.6);


        // Phase 4: Optional glow effect
        letterTimeline.to(char, {
          textShadow: `0 0 10px ${borderColor}`,
          duration: 0.3,
          ease: 'power2.out'
        }, borderDuration * 0.8);


        // Add to main timeline with stagger
        tl.add(letterTimeline, index * stagger + delay);
      });
    });
  }


  /**
   * Alternative circuit animation with more advanced effects
   */
  private async animateLettersAdvancedCircuit(
    element: HTMLElement,
    options: {
      stagger?: number;
      delay?: number;
    } = {}
  ): Promise<void> {
    const { gsap } = await import('gsap/all');


    const {
      stagger = 0.12,
      delay = 0
    } = options;


    const originalText = element.textContent || '';
    element.style.opacity = '1';


    // Create more complex HTML structure for advanced effects
    element.innerHTML = originalText
      .split('')
      .map(letter => {
        if (letter === ' ') {
          return '<span class="inline-block">&nbsp;</span>';
        }
        return `
         <span class="inline-block relative letter-container">
           <span class="letter-bg absolute inset-0" style="
             color: transparent;
             -webkit-text-stroke: 0px #6366f1;
             opacity: 0;
             transform: scale(0.8);
           ">${letter}</span>
           <span class="letter-fill" style="
             color: transparent;
             opacity: 0;
             transform: scale(0.8);
           ">${letter}</span>
         </span>
       `;
      })
      .join('');


    const containers = element.querySelectorAll('.letter-container');


    return new Promise((resolve) => {
      const tl = gsap.timeline({ onComplete: resolve });


      containers.forEach((container, index) => {
        const bg = container.querySelector('.letter-bg') as HTMLElement;
        const fill = container.querySelector('.letter-fill') as HTMLElement;


        if (!bg || !fill) return;


        const letterTl = gsap.timeline();


        // Phase 1: Scale up and show border
        letterTl.to([bg, fill], {
          scale: 1,
          duration: 0.3,
          ease: 'back.out(1.7)'
        }, 0);


        // Phase 2: Draw border with circuit-like effect
        letterTl.to(bg, {
          opacity: 1,
          webkitTextStroke: '2px #10b981',
          duration: 0.8,
          ease: 'power2.inOut'
        }, 0.1);


        // Phase 3: Add scanning line effect
        letterTl.to(bg, {
          textShadow: '0 0 20px #10b981, 0 0 30px #10b981',
          duration: 0.3,
          ease: 'power2.out'
        }, 0.5);


        // Phase 4: Fill with color
        letterTl.to(fill, {
          opacity: 1,
          color: '#6366f1',
          duration: 0.6,
          ease: 'power2.out'
        }, 0.7);


        // Phase 5: Final glow
        letterTl.to(fill, {
          textShadow: '0 0 15px #6366f1',
          duration: 0.4,
          ease: 'power2.out'
        }, 1.1);


        tl.add(letterTl, index * stagger + delay);
      });
    });
  }
}
