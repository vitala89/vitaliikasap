import { Component } from '@angular/core';
import { t } from '../../../../shared/i18n/i18n.signal';

@Component({
  selector: 'app-intro-card',
  standalone: true,
  template: `
    <div
      class="flex gap-2 mb-4  flex-col h-full bg-white/90 dark:bg-neutral-800/90 rounded-3xl shadow-2xl p-8 min-h-[600px] transition-colors duration-300">
      <!-- Badge with translation -->
      <span
        class="inline-block mb-4 px-3 py-1 rounded-xl bg-neutral-200/80 dark:bg-neutral-700/80 text-neutral-600 dark:text-neutral-300 text-md font-semibold tracking-widest w-fit hover cursor-hover">
  {{ t('intro.badge') }}
</span>

      <!-- Title with translation support -->
      <h1 class="text-4xl font-bold mb-6 font-main text-black dark:text-neutral-100">
        {{ t('intro.title.part1') }} <span
        class="cursor-hover text-indigo-500 dark:text-indigo-400">{{ t('intro.title.name') }}</span>,
        <br>{{ t('intro.title.role') }}
      </h1>

      <!-- Description with translation support -->
      <p class="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
        {{ t('intro.description.line1') }}<br>
        {{ t('intro.description.line2') }}<br>
        {{ t('intro.description.line3') }}<br>
        {{ t('intro.description.line4') }}
      </p>
      <!-- Download CV Button -->
      <div class="flex gap-4 items-center mb-10">
        <a
          href="cv_vitalii_kasap.pdf"
          download
          class="flex items-center justify-center px-6 py-3 overflow-hidden text-lg font-semibold shadow text-white transition-all duration-300 bg-indigo-500 hover:bg-transparent border-2 border-indigo-500 rounded-2xl hover:rounded-none hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 5v14m7-7l-7 7-7-7"/>
          </svg>
          {{ t('intro.downloadCv') }}
        </a>
      </div>
    </div>
  `,
})
export class IntroCardComponent {
  // Access translations
  protected readonly t = t;
}
