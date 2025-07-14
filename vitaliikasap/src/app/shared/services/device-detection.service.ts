import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {
  private _isMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Only check if we're in browser environment
    if (isPlatformBrowser(this.platformId)) {
      this._isMobile = this.checkIfMobile();
    }
  }

  private checkIfMobile(): boolean {
    // Additional safety check
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return false;
    }

    // Check for touch capability
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Check user agent for mobile patterns
    const userAgent = navigator.userAgent.toLowerCase();
    const mobilePatterns = [
      /android/i,
      /webos/i,
      /iphone/i,
      /ipad/i,
      /ipod/i,
      /blackberry/i,
      /windows phone/i,
      /mobile/i
    ];

    const isMobileUserAgent = mobilePatterns.some(pattern => pattern.test(userAgent));

    // Check screen size
    const isSmallScreen = window.innerWidth <= 1024;

    return hasTouchScreen || isMobileUserAgent || isSmallScreen;
  }

  get isMobile(): boolean {
    return this._isMobile;
  }

  get isDesktop(): boolean {
    return !this._isMobile;
  }
}
