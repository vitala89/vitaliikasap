import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideIconsModule } from '../../../modules/lucide-icons/lucide-icons.module';
import { DeviceDetectionService } from '../../../services/device-detection.service';
import { PushedEffectDirective } from '../../directives/pushed-effect.directive';

@Component({
  selector: 'app-mobile-nav-arrows',
  standalone: true,
  imports: [LucideIconsModule, PushedEffectDirective],
  template: `
    @if (deviceService.isMobile) {
      <div
        class="fixed bottom-6 right-6 z-50 flex items-center gap-4"
      >
        <div
          class="relative flex flex-col items-center gap-2 rounded-full shadow-2xl border border-gray-100/10 bg-background/80 p-2 backdrop-blur-md dark:bg-background/60 transition-colors duration-200"
        >
          <button
            appPushedEffect
            (click)="navigateToNext($event)"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100/10 bg-primary/20 text-indigo-500 shadow-lg transition-all duration-200 hover:bg-primary/30 dark:bg-primary/10 dark:text-primary-foreground"
            aria-label="Next page"
          >
            <lucide-icon name="chevron-right" class="h-5 w-5"></lucide-icon>
          </button>
          <button
            appPushedEffect
            (click)="navigateToPrevious($event)"
            class="flex h-10 w-10 items-center justify-center border border-gray-100/10 rounded-full bg-primary/20 text-indigo-500 shadow-sm transition-all duration-200 hover:bg-primary/30 dark:bg-primary/10 dark:text-primary-foreground"
            aria-label="Previous page"
          >
            <lucide-icon name="chevron-left" class="h-5 w-5"></lucide-icon>
          </button>
        </div>
      </div>
    }
  `,
})
export class MobileNavArrowsComponent {
  private readonly router = inject(Router);
  readonly deviceService = inject(DeviceDetectionService);

  // Define the order of routes for navigation
  private readonly routes = ['', 'about', 'resume', 'skills', 'testimonials', 'contact'];

  navigateToPrevious(event: MouseEvent): void {
    this.applyClickAnimation(event.currentTarget as HTMLElement);
    this.navigate(-1);
  }

  navigateToNext(event: MouseEvent): void {
    this.applyClickAnimation(event.currentTarget as HTMLElement);
    this.navigate(1);
  }

  private applyClickAnimation(element: HTMLElement): void {
    // Add the animation class
    element.classList.add('click-animation');

    // Remove the animation class after the animation completes
    setTimeout(() => {
      element.classList.remove('click-animation');
    }, 300); // Match the animation duration
  }

  private navigate(direction: 1 | -1): void {
    const currentRoute = this.getCurrentRoute();
    const currentIndex = this.routes.indexOf(currentRoute);

    if (currentIndex === -1) {
      // Fallback to home if current route is not in our list
      this.router.navigate([this.routes[0]]);
      return;
    }

    const totalRoutes = this.routes.length;
    // The modulo operator handles wrapping around for both directions
    const nextIndex = (currentIndex + direction + totalRoutes) % totalRoutes;
    this.router.navigate([this.routes[nextIndex]]);
  }

  private getCurrentRoute(): string {
    // Get the current route path without leading slash
    return this.router.url.split('/')[1] || '';
  }
}
