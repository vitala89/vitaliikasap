import {AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild} from '@angular/core';
import {SkillsCardComponent} from './components/skills-card/skills-card.component';
import {PhotoCardComponent} from '../home-intro/components/photo-card/photo-card.component';
import {ScrollService} from '../../shared/services/scroll.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillsCardComponent, PhotoCardComponent],
  template: `
    <div class="flex justify-center items-center min-h-screen ml-0 md:ml-0 xl:ml-14 px-4">
      <div class="max-w-6xl w-full py-20">
        <div class="flex flex-col lg:flex-row gap-8 w-full">
          <!-- Photo Card - Taller but narrower -->
          <div class="w-full lg:w-2/5">
            <app-photo-card class="h-full"/>
          </div>

          <!-- Intro Card - Wider but shorter -->
          <div class="w-full lg:w-3/5" #skillsCard>
            <app-skills-card class="h-full"/>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SkillsComponent implements AfterViewInit, OnDestroy {

  private scrollService = inject(ScrollService);
  private unsubscribe: () => void = () => {
  };

  @ViewChild('skillsCard') skillsCard!: ElementRef;

  ngAfterViewInit() {
    // Setup the scroll behavior once the view is initialized
    this.unsubscribe = this.scrollService.setupScrollOnNavigation(
      this.skillsCard,
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
