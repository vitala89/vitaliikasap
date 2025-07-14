import {Component, inject} from '@angular/core';
import {PhotoCardComponent} from '../../features/home-intro/components/photo-card/photo-card.component';
import {AboutInfoCardComponent} from '../../features/about-info-card/about-info-card.component';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [
    PhotoCardComponent,
    AboutInfoCardComponent],
  template: `
    <div class="flex justify-center items-center min-h-screen ml-0 md:ml-0 xl:ml-14 px-4">
      <div class="max-w-6xl w-full py-20">
        <div class="flex flex-col lg:flex-row gap-8 w-full">
          <!-- Photo Card - Taller but narrower -->
          <div class="w-full lg:w-2/5">
            <app-photo-card class="h-full"/>
          </div>

          <!-- Intro Card - Wider but shorter -->
          <div class="w-full lg:w-3/5">
            <app-about-info-card />
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private meta = inject(Meta);
  private title = inject(Title);

  constructor() {
    this.title.setTitle('About | Vitalii Kasap — Frontend Engineer');
    this.meta.updateTag({
      name: 'description',
      content: 'Learn more about Vitalii Kasap: Frontend Engineer, expertise, career and personal story.'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'About | Vitalii Kasap — Frontend Engineer'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Learn more about Vitalii Kasap: Frontend Engineer, expertise, career and personal story.'
    });
  }
}
