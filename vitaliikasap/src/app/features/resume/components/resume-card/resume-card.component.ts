import {Component} from '@angular/core';
import {EducationSectionComponent} from '../education-section/education-section.component';
import {ExperienceSectionComponent} from '../experience-section/experience-section.component';
import {t} from '../../../../shared/i18n/i18n.signal';
import {staggeredContentAnimation} from '../../../../shared/animations/staggered-content.animation';

@Component({
  selector: 'app-resume-card',
  standalone: true,
  imports: [EducationSectionComponent, ExperienceSectionComponent],
  animations: [staggeredContentAnimation],
  template: `
    <div
      class="flex flex-col h-full bg-white/90 dark:bg-neutral-800/90 rounded-3xl shadow-2xl p-8 max-h-[800px] overflow-y-auto scrollbar-hide">
      <div [@staggeredContent]>
        <div class="stagger-item flex items-center gap-2 mb-4">
      <span
        class="inline-block mb-4 px-3 py-1 rounded-xl bg-neutral-200/80 dark:bg-neutral-700/80 text-neutral-600 dark:text-neutral-300 text-md font-semibold tracking-widest w-fit hover cursor-hover">
        {{ t('resume.badge') }}
      </span>
        </div>
        <app-education-section class="stagger-item"/>
        <div class="border-t border-neutral-200 dark:border-neutral-700 my-4"></div>
        <app-experience-section class="stagger-item"/>
      </div>
    </div>
  `
})
export class ResumeCardComponent {
  protected readonly t = t;
}
