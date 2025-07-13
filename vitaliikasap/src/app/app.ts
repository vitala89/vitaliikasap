import {Component, inject} from '@angular/core';
import { ThemeSwitcherComponent } from './shared/ui/components/theme-switcher/theme-switcher.component';
import { RouterOutlet } from '@angular/router';
import {SideNavComponent} from './features/side-nav/components/side-nav/side-nav.component';
import {LangSwitcherComponent} from './shared/ui/components/lang-switcher/lang-switcher.component';
import {BurgerMenuComponent} from './features/burger-menu/components/burger-menu/burger-menu.component';
import {CursorComponent} from './shared/ui/components/cursor/cursor.component';
import {NetAnimationComponent} from './features/net-animation/components/net-animation.component';
import {NgIf} from '@angular/common';
import {IntroFeatureService, IntroOverlayComponent} from './features/intro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThemeSwitcherComponent, RouterOutlet, SideNavComponent, LangSwitcherComponent, BurgerMenuComponent, CursorComponent, NetAnimationComponent, NgIf, IntroOverlayComponent],
  template: `
<!--    <app-intro-overlay *ngIf="!introShown()" (finished)="onIntroEnd()"/>-->
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
export class App {
  intro = inject(IntroFeatureService);
  introShown = this.intro.introShown;

  onIntroEnd() {
    this.intro.showIntro();
  }
}
