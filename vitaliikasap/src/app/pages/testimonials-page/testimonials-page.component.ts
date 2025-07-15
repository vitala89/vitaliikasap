import {AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild} from '@angular/core';
import {TestimonialsComponent} from '../../features/testimonials/components/testimonials.component';
import {PhotoCardComponent} from '../../features/home-intro/components/photo-card/photo-card.component';
import {Meta, Title} from '@angular/platform-browser';
import {ScrollService} from '../../shared/services/scroll.service';

@Component({
  selector: 'app-testimonials-page',
  standalone: true,
  template: `
    <div class="flex justify-center items-center min-h-screen ml-0 md:ml-0 xl:ml-14 px-4">
      <div class="max-w-6xl w-full py-20">
        <div class="flex flex-col lg:flex-row gap-8 w-full">
          <!-- Photo Card - Taller but narrower -->
          <div class="w-full lg:w-2/5">
            <app-photo-card class="h-full"/>
          </div>

          <!-- Intro Card - Wider but shorter -->
          <div class="w-full lg:w-3/5" #testimonialsCard>
            <app-testimonials class="h-full"/>
          </div>
        </div>
      </div>
    </div>
  `,
  imports: [
    TestimonialsComponent,
    PhotoCardComponent
  ]
})
export class TestimonialsPageComponent implements AfterViewInit, OnDestroy {
  private meta = inject(Meta);
  private title = inject(Title);
  private scrollService = inject(ScrollService);
  private unsubscribe: () => void = () => {
  };

  @ViewChild('testimonialsCard') testimonialsCard!: ElementRef;

  constructor() {
    this.title.setTitle('Testimonials | Vitalii Kasap — Frontend Engineer');
    this.meta.updateTag({
      name: 'description',
      content: 'What clients and colleagues say about Vitalii Kasap — read real testimonials and reviews from around the world.'
    });
    this.meta.updateTag({property: 'og:title', content: 'Testimonials | Vitalii Kasap — Frontend Engineer'});
    this.meta.updateTag({
      property: 'og:description',
      content: 'What clients and colleagues say about Vitalii Kasap — read real testimonials and reviews from around the world.'
    });
    this.meta.updateTag({property: 'og:image', content: '/assets/og-image.png'});
  }

  ngAfterViewInit() {
    // Setup the scroll behavior once the view is initialized
    this.unsubscribe = this.scrollService.setupScrollOnNavigation(
      this.testimonialsCard,
      {
        mobileOnly: true,
        delay: 300,
        behavior: 'smooth',
        block: 'start',
        immediate: true
      }
    );
  }

  ngOnDestroy() {
    // Clean up subscription when component is destroyed
    this.unsubscribe();
  }
}
