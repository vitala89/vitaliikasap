import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {t} from '../../../../shared/i18n/i18n.signal';
import {LucideIconsModule} from '../../../../shared/modules/lucide-icons/lucide-icons.module';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [NgOptimizedImage, LucideIconsModule],
  template: `
    <div
      class="relative flex flex-col rounded-3xl shadow-2xl h-full w-full  md:min-h-[900px] bg-white/80 dark:bg-neutral-800/80">
      <!-- Image Container -->
      <div class="flex-1 p-6 pb-0">
        <img
          [ngSrc]="avatarImg"
          alt="Vitalii Kasap"
          width="480" height="600"
          class="w-full h-full object-cover rounded-2xl"
          priority
        />
      </div>

      <!-- Content Section -->
      <div class="p-6 pt-8">
        <div class="text-center mb-6">
          <h2 class="text-3xl font-bold mb-3 text-indigo-500 dark:text-indigo-400 font-main">
            {{ t('name') }}
          </h2>
          <div
            class="text-xl font-semibold transition-all duration-700 h-[28px] flex items-center justify-center font-main text-indigo-500 dark:text-indigo-400"
          >
            @if (showFrontend()) {
              <span class="transition-opacity duration-700 opacity-100 animate-fade-in-out">
                {{ t('frontend') }}
              </span>
            } @else {
              <span class="transition-opacity duration-700 opacity-100 animate-fade-in-out">
                {{ t('developer') }}
              </span>
            }
          </div>
        </div>

        <button
          class="w-full bg-indigo-500 text-white font-semibold py-4 px-6 rounded-2xl border-2 border-indigo-500 transition-all duration-300 text-lg font-main hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-3"
          type="button"
          (click)="onHire()"
        >
          <lucide-icon name="mail" size="20"></lucide-icon>
          {{ t('hireMe') }}
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      @keyframes fade-in-out {
        0%,
        100% {
          opacity: 0;
        }
        10%,
        90% {
          opacity: 1;
        }
      }
      .animate-fade-in-out {
        animation: fade-in-out 2.6s linear;
      }
    `,
  ],
})
export class PhotoCardComponent {
  protected readonly t = t;
  avatarImg = 'avatar.webp';

  private state = signal(true); // true = Frontend, false = Developer

  showFrontend = this.state.asReadonly();

  constructor() {
    setInterval(() => {
      this.state.set(!this.state());
    }, 2600);
  }

  onHire() {
    window.open('mailto:vitalii.kasap@icloud.com?subject=Hire%20Vitalii%20Kasap', '_blank');
  }
}
