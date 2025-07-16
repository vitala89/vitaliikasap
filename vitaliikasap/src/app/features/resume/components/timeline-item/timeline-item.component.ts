import {Component, input} from '@angular/core';
import {staggeredContentAnimation} from '../../../../shared/animations/staggered-content.animation';

@Component({
  selector: 'app-timeline-item',
  standalone: true,
  animations: [staggeredContentAnimation],
  template: `
    <li [@staggeredContent] class="flex gap-3 mb-8 relative group">
      <div class="stagger-item flex flex-col items-center">
        <span
          class="w-5 h-5 border-2 border-indigo-500 rounded-full flex items-center justify-center bg-white dark:bg-neutral-800">
          <span class="block w-2.5 h-2.5 bg-indigo-500 rounded-full"></span>
        </span>
        @if (!last()) {
          <span class="h-full w-px bg-neutral-300 dark:bg-neutral-700 absolute top-5 left-2.5"></span>
        }
      </div>
      <div class="flex-1 stagger-item">
        <div class="font-bold text-lg mb-0.5 font-main text-neutral-900 dark:text-white transition-colors duration-300">
          {{ title() }}
        </div>
        <div class="text-neutral-500 dark:text-neutral-400 text-sm mb-1 transition-colors duration-300">
          {{ subtitle() }}
        </div>
        <div class="text-neutral-600 dark:text-neutral-300 text-base transition-colors duration-300">
          {{ description() }}
        </div>
      </div>
      @if (icon()) {
        <div class="stagger-item flex items-start pt-2 pl-4 min-w-[32px]">
          @switch (icon()) {
            @case ('envato') {
              <svg class="w-6 h-6 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="currentColor"/>
              </svg>
            }
            @case ('apple') {
              <svg class="w-6 h-6 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24">
                <path
                  d="M16 13c-1.8 0-2.2 1.3-4 1.3s-2.3-1.3-4-1.3C6 13 4 15.1 4 17.6 4 19.8 5.9 22 8 22c1.6 0 2.3-1.1 4-1.1s2.3 1.1 4 1.1c2.1 0 4-2.2 4-4.4C20 15.1 18 13 16 13z"/>
                <circle cx="17" cy="7" r="2"/>
              </svg>
            }
            @case ('twitter') {
              <svg class="w-6 h-6 text-indigo-500 dark:text-indigo-400" viewBox="0 0 24 24">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="2"/>
              </svg>
            }
          }
        </div>
      }
    </li>
  `
})
export class TimelineItemComponent {
title = input('');
subtitle = input('');
description = input('');
icon = input<'envato' | 'apple' | 'twitter'>();
last = input(false);
}
