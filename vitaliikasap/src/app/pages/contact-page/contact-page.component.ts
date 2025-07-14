import {Component, inject} from '@angular/core';
import {PhotoCardComponent} from '../../features/home-intro/components/photo-card/photo-card.component';
import {ContactComponent} from '../../features/contact';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  imports: [
    PhotoCardComponent,
    ContactComponent
  ],
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
            <app-contact class="h-full"/>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ContactPageComponent {
  private meta = inject(Meta);
  private title = inject(Title);

  constructor() {
    this.title.setTitle('Contact | Vitalii Kasap — Frontend Engineer');
    this.meta.updateTag({
      name: 'description',
      content: 'Get in touch with Vitalii Kasap for job opportunities, collaborations, or frontend consulting.'
    });
    this.meta.updateTag({ property: 'og:title', content: 'Contact | Vitalii Kasap — Frontend Engineer' });
    this.meta.updateTag({ property: 'og:description', content: 'Get in touch with Vitalii Kasap for job opportunities, collaborations, or frontend consulting.' });
    this.meta.updateTag({ property: 'og:image', content: '/assets/og-image.png' });
  }
}
