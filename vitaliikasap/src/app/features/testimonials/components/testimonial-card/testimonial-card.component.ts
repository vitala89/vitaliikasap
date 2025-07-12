import { Component, computed, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {LucideIconsModule} from '../../../../shared/modules/lucide-icons/lucide-icons.module';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    LucideIconsModule
  ],
  template: `
    <div class="rounded-2xl p-6 bg-neutral-100 dark:bg-neutral-700/40 flex flex-col gap-2">
      <div class="flex items-center gap-5 mb-2">
        <img [ngSrc]="avatar()" alt="" width="56" height="56" class="w-14 h-14 rounded-full border-2 border-indigo-400 shadow-md"/>
        <div class="flex-1">
          <div class="text-lg font-bold text-neutral-800 dark:text-neutral-100">{{ name() }}</div>
          <div class="text-neutral-500 dark:text-neutral-300 text-sm">{{ role() }}</div>
        </div>
        <lucide-icon
          name="quote"
          [size]="24"
          class="transition-all duration-300 text-indigo-400"
        ></lucide-icon>
      </div>
      <div class="flex items-center gap-1 mb-2">
        @for (star of starsArray(); track $index) {
          <svg class="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
            <polygon points="10,2 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7"/>
          </svg>
        }
      </div>
      <div class="text-neutral-700 dark:text-neutral-100 text-base leading-relaxed min-h-[80px]">
        {{ text() }}
      </div>
    </div>
  `
})
export class TestimonialCardComponent {
  rating = input.required<number>();
  avatar = input.required<string>();
  name = input.required<string>();
  role = input.required<string>();
  stars = input<number>(5);
  text = input.required<string>();

  starsArray = computed(() => {
    return Array.from({ length: this.stars() });
  });
}
