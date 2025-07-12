import {
  Component,
  signal,
  computed,
  effect,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { t } from '../../../../shared/i18n/i18n.signal';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';

// Register Swiper custom elements
register();

interface Testimonial {
  rating: number;
  name: string;
  role: string;
  avatar: string;
  stars: number;
  text: string;
}

@Component({
  selector: 'app-testimonials-slider',
  standalone: true,
  imports: [TestimonialCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  template: `
    <div class="flex flex-col bg-white/90 dark:bg-neutral-800/90 rounded-3xl shadow-2xl p-8 max-h-[800px] overflow-y-auto scrollbar-hide max-w-5xl mx-auto">
      <div class="mb-3 flex items-center gap-2">
        <span
          class="inline-block mb-4 px-3 py-1 rounded-xl bg-neutral-200/80 dark:bg-neutral-700/80 text-neutral-600 dark:text-neutral-300 text-md font-semibold tracking-widest w-fit hover cursor-hover">
          {{ t('testimonials.badge') }}
        </span>
      </div>
      <h1 class="text-4xl md:text-4xl font-bold font-main mb-3 text-neutral-900 dark:text-white leading-tight">
        {{ t('testimonials.title') }}
      </h1>
      <p class="mb-8 text-lg text-neutral-600 dark:text-neutral-300">
        {{ t('testimonials.description') }}
      </p>

      <!-- Swiper Container -->
      <div class="relative">
        <swiper-container
          #swiperRef
          init="false"
          class="testimonials-swiper"
        >
          @for (testimonial of testimonials(); track testimonial.name) {
            <swiper-slide>
              <app-testimonial-card
                [rating]="testimonial.rating"
                [avatar]="testimonial.avatar"
                [name]="testimonial.name"
                [role]="testimonial.role"
                [stars]="testimonial.stars"
                [text]="testimonial.text"
              />
            </swiper-slide>
          }
        </swiper-container>

        <!-- Custom Navigation -->
        <div class="flex items-center gap-2 mt-4 justify-center">
          <button
            class="swiper-button-prev-custom w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center bg-white dark:bg-neutral-800 hover:bg-indigo-100 dark:hover:bg-emerald-900 transition"
            [disabled]="testimonials().length <= 1"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
          </button>

          <span class="mx-2 font-medium text-neutral-600 dark:text-neutral-300">
            {{ currentSlideIndex() + 1 }} / {{ testimonials().length }}
          </span>

          <button
            class="swiper-button-next-custom w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center bg-white dark:bg-neutral-800 hover:bg-indigo-100 dark:hover:bg-emerald-900 transition"
            [disabled]="testimonials().length <= 1"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .testimonials-swiper {
    width: 100%;
    height: auto;
    overflow: visible; /* Allow overflow to show partial slides */
    padding: 0 20px; /* Add padding to prevent clipping */
  }

  .testimonials-swiper swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  /* Style for non-active slides (partial slides) */
  .testimonials-swiper swiper-slide:not(.swiper-slide-active) {
    opacity: 0.6;
    transform: scale(0.95);
  }

  /* Active slide styling */
  .testimonials-swiper swiper-slide.swiper-slide-active {
    opacity: 1;
    transform: scale(1);
  }

  /* Hide default Swiper navigation since we use custom buttons */
  .testimonials-swiper .swiper-button-next,
  .testimonials-swiper .swiper-button-prev {
    display: none;
  }

  /* Custom button states */
  .swiper-button-prev-custom:disabled,
  .swiper-button-next-custom:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Ensure smooth transitions during drag */
  .testimonials-swiper .swiper-wrapper {
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`]
})
export class TestimonialsSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('swiperRef', { static: true }) swiperRef!: ElementRef;

  readonly t = t;
  private swiperInstance: Swiper | null = null;

  // Create a computed signal that reacts to language changes
  readonly testimonials = computed<Testimonial[]>(() => {
    const testimonialsData = this.t('testimonials.items');
    return Array.isArray(testimonialsData) ? testimonialsData as Testimonial[] : [];
  });

  readonly currentSlideIndex = signal(0);
  readonly isPaused = signal(false);

  constructor() {
    // Effect to reinitialize Swiper when testimonials change
    effect(() => {
      const testimonialsList = this.testimonials();
      if (testimonialsList.length > 0 && this.swiperInstance) {
        // Reinitialize Swiper with new data
        this.reinitializeSwiper();
      }
    });
  }

  ngOnInit(): void {
    // Component initialization logic if needed
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  ngOnDestroy(): void {
    if (this.swiperInstance) {
      this.swiperInstance.destroy();
    }
  }

  private initializeSwiper(): void {
    const swiperConfig: SwiperOptions = {
      // Basic settings
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,

      // Loop for infinite scrolling
      loop: this.testimonials().length > 1,

      // Autoplay settings
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },

      // Smooth transitions
      speed: 400,
      effect: 'slide',

      // Enhanced Touch/drag settings for smooth bidirectional swiping
      allowTouchMove: true,
      touchRatio: 1,
      touchAngle: 45,
      grabCursor: true,

      // Resistance settings for smooth dragging
      resistance: true,
      resistanceRatio: 0.85,

      // Threshold settings for better responsiveness
      threshold: 10,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,

      // Follow finger during drag
      followFinger: true,

      // Momentum settings
      freeMode: {
        enabled: false,
        momentum: true,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
      },

      // Mouse wheel support
      mousewheel: {
        enabled: true,
        sensitivity: 1,
        eventsTarget: '.testimonials-swiper',
      },

      // Keyboard navigation
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      // Accessibility
      a11y: {
        enabled: true,
        prevSlideMessage: 'Previous testimonial',
        nextSlideMessage: 'Next testimonial',
      },

      // Custom navigation
      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },

      // Events
      on: {
        slideChange: (swiper: Swiper) => {
          // Update current slide index for display
          this.currentSlideIndex.set(swiper.realIndex);
        },
        autoplayPause: () => {
          this.isPaused.set(true);
        },
        autoplayResume: () => {
          this.isPaused.set(false);
        },
        // Ensure smooth initialization
        init: (swiper: Swiper) => {
          this.currentSlideIndex.set(swiper.realIndex);
        },
        // Handle touch events for better responsiveness
        touchStart: () => {
          if (this.swiperInstance?.autoplay) {
            this.swiperInstance.autoplay.stop();
          }
        },
        touchEnd: () => {
          if (this.swiperInstance?.autoplay) {
            this.swiperInstance.autoplay.start();
          }
        },
      },
    };

    // Initialize Swiper with proper custom element handling
    const swiperEl = this.swiperRef.nativeElement;

    // Assign configuration to the custom element
    Object.assign(swiperEl, swiperConfig);

    // Initialize with proper error handling
    try {
      if (typeof swiperEl.initialize === 'function') {
        swiperEl.initialize();
      } else {
        // Fallback: set init to true to trigger initialization
        swiperEl.init = true;
      }

      // Store reference to the Swiper instance
      // Wait for the swiper to be ready
      setTimeout(() => {
        this.swiperInstance = swiperEl.swiper;
        if (this.swiperInstance) {
          this.currentSlideIndex.set(this.swiperInstance.realIndex || 0);
        }
      }, 100);

    } catch (error) {
      console.error('Error initializing Swiper:', error);

      // Alternative initialization approach
      setTimeout(() => {
        swiperEl.init = true;
        this.swiperInstance = swiperEl.swiper;
        if (this.swiperInstance) {
          this.currentSlideIndex.set(this.swiperInstance.realIndex || 0);
        }
      }, 200);
    }
  }

  private reinitializeSwiper(): void {
    // Destroy existing instance
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
    }

    // Reinitialize with new data
    setTimeout(() => {
      this.initializeSwiper();
    }, 50);
  }
}
