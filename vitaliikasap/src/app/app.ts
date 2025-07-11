import { Component } from '@angular/core';
import { NavComponent } from './shared/ui/components/nav/nav.component';
import { ThemeSwitcherComponent } from './shared/ui/components/theme-switcher/theme-switcher.component';
import { RouterOutlet } from '@angular/router';
import {SideNavComponent} from './features/side-nav/components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, ThemeSwitcherComponent, RouterOutlet, SideNavComponent],
  template: `
    <app-theme-switcher></app-theme-switcher>
    <app-nav></app-nav>
    <app-side-nav />

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class App {}
