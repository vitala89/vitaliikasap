import { Injectable, ElementRef, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DeviceDetectionService } from './device-detection.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private deviceDetectionService = inject(DeviceDetectionService);
  private router = inject(Router);

  constructor() {
    // Listen for navigation end events globally
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // We'll handle navigation events in the service
      // but specific scroll actions will be delegated to components
    });
  }

  /**
   * Setup auto-scrolling for an element on navigation
   * @param elementRef Reference to the element to scroll to
   * @param options Configuration options
   * @returns A function that can be called to unsubscribe from navigation events
   */
  setupScrollOnNavigation(
    elementRef: ElementRef,
    options: {
      mobileOnly?: boolean;        // Only scroll on mobile devices (default: true)
      delay?: number;              // Delay in ms before scrolling (default: 300)
      behavior?: ScrollBehavior;   // Scroll behavior (default: 'smooth')
      block?: ScrollLogicalPosition; // Scroll alignment (default: 'start')
      immediate?: boolean;         // Whether to scroll immediately once (default: true)
    } = {}
  ) {
    // Set default options
    const {
      mobileOnly = true,
      delay = 300,
      behavior = 'smooth',
      block = 'start',
      immediate = true
    } = options;

    // Function to do the actual scrolling
    const doScroll = () => {
      if (elementRef && elementRef.nativeElement) {
        if (!mobileOnly || (mobileOnly && this.deviceDetectionService.isMobile)) {
          setTimeout(() => {
            elementRef.nativeElement.scrollIntoView({
              behavior,
              block
            });
          }, delay);
        }
      }
    };

    // Handle immediate scroll if requested
    if (immediate) {
      doScroll();
    }

    // Return subscription to navigation events
    const subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Only scroll on mobile if that option is set
      if (!mobileOnly || (mobileOnly && this.deviceDetectionService.isMobile)) {
        doScroll();
      }
    });

    // Return a function to unsubscribe when the component is destroyed
    return () => subscription.unsubscribe();
  }

  /**
   * Scroll to a specific element immediately
   */
  scrollToElement(
    elementRef: ElementRef,
    options: {
      behavior?: ScrollBehavior;
      block?: ScrollLogicalPosition;
      delay?: number;
    } = {}
  ) {
    const { behavior = 'smooth', block = 'start', delay = 0 } = options;

    if (elementRef && elementRef.nativeElement) {
      setTimeout(() => {
        elementRef.nativeElement.scrollIntoView({
          behavior,
          block
        });
      }, delay);
    }
  }
}
