import { Component, computed } from '@angular/core';
import { t } from '../../../../shared/i18n/i18n.signal';
import { SkillCircleComponent } from '../skill-circle/skill-circle.component';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import {staggeredContentAnimation} from '../../../../shared/animations/staggered-content.animation';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  animations: [staggeredContentAnimation],
  imports: [SkillCircleComponent, SkillIconComponent],
  template: `
    <div
      class="flex flex-col bg-white/90 dark:bg-neutral-800/90 rounded-3xl shadow-2xl p-8 max-h-[800px] overflow-y-auto scrollbar-hide max-w-5xl mx-auto">
      <div [@staggeredContent]>
        <div class="stagger-item mb-3 flex items-center gap-2">
        <span
          class="inline-block mb-4 px-3 py-1 rounded-xl bg-neutral-200/80 dark:bg-neutral-700/80 text-neutral-600 dark:text-neutral-300 text-md font-semibold tracking-widest w-fit hover cursor-hover">
          {{ t('skills.badge') }}
        </span>
        </div>
        <h1
          class="stagger-item text-4xl md:text-4xl font-bold font-main mb-3 text-neutral-900 dark:text-white leading-tight">{{ t('skills.title') }}</h1>
        <p class="stagger-item mb-8 text-lg text-neutral-600 dark:text-neutral-300">{{ t('skills.description') }}</p>

        <!-- Language Skills -->
        <h2 class="stagger-item text-xl font-bold mb-5 dark:text-white xl:text-2xl">
          {{ t('skills.language.title') }}
        </h2>
        <div class="flex flex-wrap gap-6 mb-10">
          @for (lang of languageSkills(); track lang.name) {
            <div class="flex flex-col items-center w-32 hover:scale-110">
              <app-skill-circle [value]="lang.value" class="mb-2"/>
              <div class="stagger-item text-xl font-semibold dark:text-neutral-200">{{ lang.value }}%</div>
              <div class="stagger-item mt-2 text-base text-neutral-700 dark:text-neutral-200">{{ lang.name }}</div>
            </div>
          }
        </div>

        <!-- Hard Skills -->
        <h2 class="stagger-item text-xl font-bold mb-3 dark:text-white">{{ t('skills.hard.title') }}</h2>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
          @for (hard of hardSkills(); track hard.name) {
            <div
              class="stagger-item cursor-hover flex flex-col items-center justify-center py-6 rounded-3xl bg-neutral-50 dark:bg-neutral-900 shadow-sm border border-neutral-100 dark:border-neutral-700 transition hover:shadow-lg hover:shadow-gray-400">
              <app-skill-icon [icon]="hard.icon"/>
              <div class="text-indigo-500 font-semibold text-xl mb-1">{{ hard.value }}%</div>
              <div class="text-base text-neutral-700 dark:text-neutral-200">{{ hard.name }}</div>
            </div>
          }
        </div>

        <!-- Soft Skills -->
        <h2 class="stagger-item text-xl font-bold mt-8 mb-3 dark:text-white">{{ t('skills.soft.title') }}</h2>
        <ul class="flex flex-wrap gap-4">
          @for (soft of softSkills(); track soft) {
            <li
              class="stagger-item cursor-hover px-4 py-2 rounded-2xl bg-indigo-100 dark:bg-indigo-800/40 text-indigo-600 dark:text-indigo-300 font-semibold hover:shadow-lg hover:shadow-gray-400">{{ soft }}
            </li>
          }
        </ul>
      </div>
    </div>
  `
})
export class SkillsCardComponent {
  t = t;

  languageSkills = computed(() => this.t('skills.language.list') as unknown as { name: string; value: number }[]);
  hardSkills = computed(() => this.t('skills.hard.list') as unknown as { name: string; value: number; icon: string }[]);
  softSkills = computed(() => this.t('skills.soft.list') as unknown as string[]);
}
