import { Component, computed, signal, effect } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {t} from '../../../../shared/i18n/i18n.signal';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div
      class="relative flex flex-col items-center rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[800px] aspect-[4/5] w-full max-w-4/5 font-main bg-[#23212c]">
      <!-- Фото (фон, absolute) -->
      <img
        [ngSrc]="avatarImg"
        alt="Vitalii Kasap"
        width="480" height="600"
        class="absolute inset-0 w-full h-full object-cover z-[1]"
        priority
      />
      <!-- Блюр и градиент -->
      <div
        class="absolute bottom-0 left-0 w-full h-1/4 z-10
          bg-gradient-to-t from-black/70 via-black/30 to-transparent
          backdrop-blur-[8px] pointer-events-none"
      ></div>
      <!-- Контент -->
      <div class="text-center relative z-20 flex flex-col w-full h-full justify-end p-5">
        <div class="mb-4 ">
          <h2 class="text-4xl md:text-5xl font-bold mb-2 text-white font-main">
            {{ t('name') }}
          </h2>
          <div
            class="text-xl md:text-2xl font-bold transition-all duration-700 h-[32px] flex items-center justify-center font-main text-white text-center"
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
          class="cursor-hover mt-2 w-full bg-indigo-500 text-white font-semibold py-3 rounded-2xl border-2 border-transparent transition-all duration-200 text-lg font-main hover:bg-transparent hover:border-indigo-500 hover:rounded-none"
          type="button"
          (click)="onHire()"
        >
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
  avatarImg = 'avatar.webp';

  private state = signal(true); // true = Frontend, false = Developer

  showFrontend = this.state.asReadonly();

  constructor() {
    // Меняем state каждые 1.6 секунды (можно регулировать)
    setInterval(() => {
      this.state.set(!this.state());
    }, 2600);
  }

  onHire() {
    window.open('mailto:your@email.com?subject=Hire%20Vitalii%20Kasap', '_blank');
  }

  protected readonly t = t;
}
