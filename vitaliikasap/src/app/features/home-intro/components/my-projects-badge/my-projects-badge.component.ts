import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects-badge',
  standalone: true,
  template: `
    <svg width="120" height="120" viewBox="0 0 120 120" class="mx-auto">
      <circle cx="60" cy="60" r="54" stroke="#38ef7d" stroke-width="2" fill="none" stroke-dasharray="4 2"/>
      <text x="60" y="60" text-anchor="middle" dominant-baseline="middle" font-size="14" fill="#888">
        <tspan dy="-18" font-size="12" letter-spacing="3">my projects</tspan>
        <tspan x="60" dy="22" font-size="24" font-weight="bold" fill="#222">↓</tspan>
      </text>
    </svg>
  `,
})
export class MyProjectsBadgeComponent {}
