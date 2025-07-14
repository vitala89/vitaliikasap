import {Component, inject} from '@angular/core';
import {PhotoCardComponent} from '../../features/home-intro/components/photo-card/photo-card.component';
import {IntroCardComponent} from '../../features/home-intro/components/intro-card/intro-card.component';
import {Meta, Title} from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PhotoCardComponent,
    IntroCardComponent,
  ],
  template: `
    <div class="flex justify-center items-center min-h-screen ml-0 md:ml-0 xl:ml-14 px-4 ">
      <div class="max-w-6xl w-full py-20">
        <div class="flex flex-col lg:flex-row gap-8 w-full">
          <!-- Photo Card - Taller but narrower -->
            <div class="w-full lg:w-2/5">
            <app-photo-card class="h-full"/>
          </div>

          <!-- Intro Card - Wider but shorter -->
          <div class="w-full lg:w-3/5">
            <app-intro-card />
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {
  private meta = inject(Meta);
  private title = inject(Title);

  constructor() {
    this.title.setTitle('Vitalii Kasap — Frontend Engineer | Portfolio');
    this.meta.updateTag({
      name: 'description',
      content: 'Welcome to the portfolio of Vitalii Kasap — Frontend Engineer. Explore my projects, skills, resume and contact details.'
    });
    this.meta.updateTag({ property: 'og:title', content: 'Vitalii Kasap — Frontend Engineer | Portfolio' });
    this.meta.updateTag({ property: 'og:description', content: 'Welcome to the portfolio of Vitalii Kasap — Frontend Engineer. Explore my projects, skills, resume and contact details.' });
    this.meta.updateTag({ property: 'og:image', content: '/assets/og-image.png' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
