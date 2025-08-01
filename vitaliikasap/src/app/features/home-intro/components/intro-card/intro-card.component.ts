import { Component } from '@angular/core';
import { t } from '../../../../shared/i18n/i18n';
import { LucideAngularModule } from 'lucide-angular';
import {staggeredContentAnimation} from '../../../../shared/animations/staggered-content.animation';
import {LogoComponent} from '../../../../shared/components/logo/logo.component';

@Component({
  selector: 'app-intro-card',
  standalone: true,
  imports: [LucideAngularModule, LogoComponent],
  animations: [staggeredContentAnimation],
  template: `
    <div
      class="flex gap-2 mb-4 flex-col h-full bg-white/80 dark:bg-neutral-800/80 rounded-3xl shadow-2xl p-8 h-full lg:max-h-[900px] transition-colors duration-300">
      <div [@staggeredContent]>

        <!-- Badge with translation -->
        <span
          class="stagger-item inline-block mb-4 px-3 py-1 rounded-xl bg-neutral-200/80 dark:bg-neutral-700/80 text-neutral-600 dark:text-neutral-300 text-md font-semibold tracking-widest w-fit hover cursor-hover">
          {{ t('intro.badge') }}
        </span>

        <!-- Title with translation support -->
        <h1 class="stagger-item text-4xl font-bold mb-6 font-main text-black dark:text-neutral-100">
          {{ t('intro.title.part1') }} <span
          class="cursor-hover text-indigo-500 dark:text-indigo-400">{{ t('intro.title.name') }}</span>,
          <br>{{ t('intro.title.role') }}
        </h1>

        <!-- Description with translation support -->
        <p class="stagger-item text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
          {{ t('intro.description.line1') }}<br>
          {{ t('intro.description.line2') }}<br>
          {{ t('intro.description.line3') }}<br>
          {{ t('intro.description.line4') }}
        </p>

        <!-- Download CV Button and LinkedIn -->
        <div class="stagger-item flex gap-4 items-center mb-10 flex-col xl:flex-row">
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
          <!-- LinkedIn Button -->
          <a
            href="https://linkedin.com/in/vitaliikasap"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative flex items-center justify-center w-12 h-12 overflow-hidden text-lg font-semibold shadow text-white transition-all duration-300 bg-blue-600 hover:bg-transparent border-2 border-blue-600 rounded-2xl hover:rounded-none hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-600/20 hover:w-32"
          >
            <lucide-icon
              name="linkedin"
              class="w-5 h-5 transition-all duration-300 group-hover:mr-2 absolute group-hover:static"
            />
            <span
              class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium whitespace-nowrap">
              LinkedIn
            </span>
          </a>
        </div>
      </div>

      <!-- Logo at the bottom center -->
      <div class="mt-auto flex justify-center items-center pt-6">
        <div class="w-32 h-32">
          <app-logo [size]="32" [useGradient]="true"/>
        </div>
      </div>
    </div>
  `,
})
export class IntroCardComponent {
  // Access translations
  protected readonly t = t;
}
