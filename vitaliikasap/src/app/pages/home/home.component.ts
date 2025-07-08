import { Component } from '@angular/core';
import {SideNavComponent} from '../../features/side-nav/components/side-nav/side-nav.component';
import {ThemeSwitcherComponent} from '../../shared/ui/components/theme-switcher/theme-switcher.component';
import {AnimatedBgComponent} from '../../features/animated-bg/component/animated-bg/animated-bg.component';
import {PhotoCardComponent} from '../../features/home-intro/components/photo-card/photo-card.component';
import {IntroCardComponent} from '../../features/home-intro/components/intro-card/intro-card.component';
import { themeSignal } from '../../features/animated-bg/services/theme-signal.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SideNavComponent,
    ThemeSwitcherComponent,
    AnimatedBgComponent,
    PhotoCardComponent,
    IntroCardComponent
  ],
  template: `
    @if (themeSignal() === 'dark') {
      <app-animated-bg></app-animated-bg>
    } @else {
      <app-animated-bg></app-animated-bg>
    }
    <app-side-nav />
    <app-theme-switcher />
    <main class="flex justify-center items-center min-h-screen ml-16 px-4">
      <div class="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-20">
        <app-photo-card />
        <app-intro-card />
      </div>
    </main>
  `
})
export class HomeComponent {
  themeSignal = themeSignal;

}
