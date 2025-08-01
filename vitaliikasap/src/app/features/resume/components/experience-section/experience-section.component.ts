import { Component, computed, effect } from '@angular/core';
import { t } from '../../../../shared/i18n/i18n';
import { TimelineItemComponent } from '../timeline-item/timeline-item.component';
import {staggeredContentAnimation} from '../../../../shared/animations/staggered-content.animation';

interface ExperienceItem {
  title: string;
  subtitle: string;
  description: string;
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [TimelineItemComponent],
  animations: [staggeredContentAnimation],
  template: `
    <section [@staggeredContent]>
      <h2 class="stagger-item text-4xl font-bold font-main mb-3 text-neutral-900 dark:text-white">{{ t('resume.experience.title') }}</h2>
      <p class="stagger-item mb-7 text-neutral-700 dark:text-neutral-300" style="white-space:pre-line">
        {{ t('resume.experience.description') }}
      </p>
      <ol>
        @for (item of experienceItems(); track $index; let last = $last) {
          <app-timeline-item
            class="stagger-item"
            [title]="item.title"
            [subtitle]="item.subtitle"
            [description]="item.description"
            [last]="last"
          ></app-timeline-item>
        }
      </ol>
    </section>
  `
})
export class ExperienceSectionComponent {
  t = t;

  experienceItems = computed<ExperienceItem[]>(() => this.t('resume.experience.items') as unknown as ExperienceItem[]);
}
