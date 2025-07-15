import {AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild} from '@angular/core';
import {PhotoCardComponent} from '../../features/home-intro/components/photo-card/photo-card.component';
import {IntroCardComponent} from '../../features/home-intro/components/intro-card/intro-card.component';
import {Meta, Title} from '@angular/platform-browser';
import {ScrollService} from '../../shared/services/scroll.service';


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
          <div class="w-full lg:w-2/5" #homePhotoCard>
            <app-photo-card class="h-full"/>
          </div>

          <!-- Intro Card - Wider but shorter -->
          <div class="w-full lg:w-3/5">
            <app-intro-card/>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private meta = inject(Meta);
  private title = inject(Title);
  private scrollService = inject(ScrollService);
  private unsubscribe: () => void = () => {
  };

  @ViewChild('homePhotoCard') homePhotoCard!: ElementRef;


  constructor() {
    this.title.setTitle('Vitalii Kasap — Frontend Engineer | Home');
    this.meta.updateTag({
      name: 'description',
      content: 'Welcome to the webapp of Vitalii Kasap — Frontend Engineer. Explore my projects, skills, resume and contact details.'
    });
    this.meta.updateTag({property: 'og:title', content: 'Vitalii Kasap — Frontend Engineer'});
    this.meta.updateTag({
      property: 'og:description',
      content: 'Welcome to the webapp of Vitalii Kasap — Frontend Engineer. Explore my projects, skills, resume and contact details.'
    });
    this.meta.updateTag({property: 'og:image', content: '/assets/og-image.png'});
    this.meta.updateTag({property: 'og:type', content: 'website'});
  }

  ngAfterViewInit() {
    // Setup the scroll behavior once the view is initialized
    this.unsubscribe = this.scrollService.setupScrollOnNavigation(
      this.homePhotoCard,
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
