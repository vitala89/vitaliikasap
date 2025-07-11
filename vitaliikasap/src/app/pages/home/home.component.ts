import {Component} from '@angular/core';
import {PhotoCardComponent} from '../../features/home-intro/components/photo-card/photo-card.component';
import {IntroCardComponent} from '../../features/home-intro/components/intro-card/intro-card.component';
import {themeSignal} from '../../shared/services/theme-signal.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PhotoCardComponent,
    IntroCardComponent,
  ],
  template: `
    <main class="flex justify-center items-center min-h-screen ml-16 px-4">
      <div class="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-20">
        <app-photo-card/>
        <app-intro-card/>
      </div>
    </main>
  `
})
export class HomeComponent {
  themeSignal = themeSignal;

}
