import { Component } from '@angular/core';
import {MyProjectsBadgeComponent} from '../my-projects-badge/my-projects-badge.component';

@Component({
  selector: 'app-intro-card',
  standalone: true,
  imports: [MyProjectsBadgeComponent],
  template: `
    <div class="flex flex-col justify-center bg-white/90 dark:bg-neutral-800/90 rounded-3xl shadow-2xl p-8">
      <span class="inline-block mb-2 px-3 py-1 rounded-xl bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs font-semibold tracking-widest">INTRO</span>
      <h1 class="text-4xl font-bold mb-4 font-rounded">
        Say Hi from <span class="text-emerald-400">Vitalii Kasap</span>,<br>
        Frontend Engineer and Developer
      </h1>
      <p class="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
        Я увлечён созданием современных, производительных и красивых интерфейсов.<br>
        Экспертиза в Angular/TypeScript, чистой архитектуре, UI/UX.<br>
        Люблю превращать сложное — в простое!
      </p>
      <div class="flex gap-4 items-center mb-10">
        <a href="/assets/vitalii-cv.pdf" download
           class="bg-emerald-400 hover:bg-emerald-500 px-6 py-3 rounded-2xl text-lg font-semibold shadow transition flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
          Download CV
        </a>
      </div>
      <app-my-projects-badge />
    </div>
  `,
})
export class IntroCardComponent {}
