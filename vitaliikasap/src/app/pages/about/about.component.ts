import {
  Component,
  ElementRef,
  ViewChild,
  OnDestroy,
  inject,
  AfterViewInit
} from '@angular/core';
import { PhotoCardComponent } from '../../features/home-intro/components/photo-card/photo-card.component';
import { AboutInfoCardComponent } from '../../features/about-info-card/about-info-card.component';
import { Meta, Title } from '@angular/platform-browser';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-about',
  imports: [
    PhotoCardComponent,
    AboutInfoCardComponent
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
          <div class="w-full lg:w-3/5" #aboutInfoCard>
            <app-about-info-card />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private meta = inject(Meta);
  private title = inject(Title);
  private scrollService = inject(ScrollService);

  @ViewChild('aboutInfoCard') aboutInfoCard!: ElementRef;

  private unsubscribe: () => void = () => {};

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


  ngAfterViewInit() {
    // Setup the scroll behavior once the view is initialized
    this.unsubscribe = this.scrollService.setupScrollOnNavigation(
      this.aboutInfoCard,
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
