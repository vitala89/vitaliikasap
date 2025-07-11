import { Component } from '@angular/core';
import { NavComponent } from './shared/ui/components/nav/nav.component';
import { ThemeSwitcherComponent } from './shared/ui/components/theme-switcher/theme-switcher.component';
import { RouterOutlet } from '@angular/router';
import {SideNavComponent} from './features/side-nav/components/side-nav/side-nav.component';
import {LangSwitcherComponent} from './shared/ui/components/lang-switcher/lang-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, ThemeSwitcherComponent, RouterOutlet, SideNavComponent, LangSwitcherComponent],
  template: `
    <div class="fixed top-4 right-4 z-50 flex items-center gap-3">
      <app-lang-switcher />
      <app-theme-switcher />
    </div>
    <app-nav />
    <app-side-nav />

    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class App {}
