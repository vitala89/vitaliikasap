import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-circle',
  standalone: true,
  template: `
    <svg class="w-20 h-20" viewBox="0 0 100 100">
      <circle
        class="stroke-neutral-200 dark:stroke-neutral-700"
        cx="50" cy="50" r="45"
        fill="none"
        stroke-width="6"
      />
      <circle
        class="stroke-indigo-400"
        cx="50" cy="50" r="45"
        fill="none"
        stroke-width="6"
        [attr.stroke-dasharray]="circumference"
        [attr.stroke-dashoffset]="circumference - value / 100 * circumference"
        stroke-linecap="round"
        style="transition: stroke-dashoffset 0.8s;"
      />
    </svg>
  `
})
export class SkillCircleComponent {
  @Input() value = 0;
  readonly circumference = 2 * Math.PI * 45;
}
