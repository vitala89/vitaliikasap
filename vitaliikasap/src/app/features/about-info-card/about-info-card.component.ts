import {Component} from '@angular/core';
import {t} from '../../shared/i18n/i18n.signal';
import {staggeredContentAnimation} from '../../shared/animations/staggered-content.animation';

@Component({
  selector: 'app-about-info-card',
  standalone: true,
  animations: [staggeredContentAnimation],
  template: `
    <div class="flex flex-col h-full bg-white/90 dark:bg-neutral-800/90 rounded-3xl shadow-2xl p-8 min-h-[600px]">
      <div  [@staggeredContent]>
      <!-- Бейдж About Me -->
      <div class="stagger-item flex items-center gap-2 mb-4">
      <span
        class="inline-block mb-4 px-3 py-1 rounded-xl bg-neutral-200/80 dark:bg-neutral-700/80 text-neutral-600 dark:text-neutral-300 text-md font-semibold tracking-widest w-fit hover cursor-hover">
        {{ t('about.badge') }}
      </span>
      </div>
      <!-- Заголовок -->
      <h1 class="stagger-item text-4xl font-bold mb-5 font-main text-neutral-900 dark:text-white leading-tight">
        {{ t('about.title') }}
      </h1>
      <!-- Описание -->
      <p class="stagger-item text-lg text-neutral-600 dark:text-neutral-300 mb-8">
        {{ t('about.description') }}
      </p>
      <!-- Достижения -->
      <div class="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="text-4xl font-bold text-indigo-400 mb-1">{{ t('about.stats.years') }}</div>
          <div
            class="uppercase text-sm tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold">{{ t('about.stats.yearsLabel') }}
          </div>
        </div>
        <div>
          <div class="text-4xl font-bold text-indigo-400 mb-1">{{ t('about.stats.projects') }}</div>
          <div
            class="uppercase text-sm tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold">{{ t('about.stats.projectsLabel') }}
          </div>
        </div>
      </div>
        </div>
    </div>
  `,
})
export class AboutInfoCardComponent {
  protected readonly t = t;
}
