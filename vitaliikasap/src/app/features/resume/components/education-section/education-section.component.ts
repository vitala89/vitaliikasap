import {Component, computed, effect} from '@angular/core';
import { t } from '../../../../shared/i18n/i18n';
import { TimelineItemComponent } from '../timeline-item/timeline-item.component';
import {staggeredContentAnimation} from '../../../../shared/animations/staggered-content.animation';

interface EducationItem {
  title: string;
  subtitle: string;
  description: string;
  date: string;
}

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [TimelineItemComponent],
  animations: [staggeredContentAnimation],
// In your component decorator
  template: `
    <section [@staggeredContent]>
      <h2 class="stagger-item text-4xl font-bold font-main mb-3 text-neutral-900 dark:text-white">{{ t('resume.education.title') }}</h2>
      <p class="stagger-item mb-7 text-neutral-700 dark:text-neutral-300">
        {{ t('resume.education.description') }}
      </p>
      <ol>
        @for (item of educationItems(); track $index; let last = $last) {
          <app-timeline-item
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

export class EducationSectionComponent {
  t = t;

  educationItems = computed<EducationItem[]>(() => this.t('resume.education.items') as unknown as EducationItem[]);
}
