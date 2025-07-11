import { Component } from '@angular/core';
import { NavComponent } from './shared/ui/components/nav/nav.component';
import { ThemeSwitcherComponent } from './shared/ui/components/theme-switcher/theme-switcher.component';
import { RouterOutlet } from '@angular/router';
import {SideNavComponent} from './features/side-nav/components/side-nav/side-nav.component';
import {LangSwitcherComponent} from './shared/ui/components/lang-switcher/lang-switcher.component';
import {BurgerMenuComponent} from './features/burger-menu/components/burger-menu/burger-menu.component';
import {CursorComponent} from './shared/ui/components/cursor/cursor.component';
import {NetAnimationComponent} from './features/net-animation/components/net-animation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThemeSwitcherComponent, RouterOutlet, SideNavComponent, LangSwitcherComponent, BurgerMenuComponent, CursorComponent, NetAnimationComponent],
  template: `
    <app-net-animation></app-net-animation>
    <app-burger-menu />
    <app-cursor></app-cursor>
    <div class="fixed top-4 right-4 z-50 flex items-center gap-3">
      <app-lang-switcher/>
      <app-theme-switcher/>
    </div>
    <app-side-nav/>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class App {}
