import {Component} from '@angular/core';
import {TestimonialsComponent} from '../../features/testimonials/components/testimonials.component';
import {PhotoCardComponent} from '../../features/home-intro/components/photo-card/photo-card.component';

@Component({
  selector: 'app-testimonials-page',
  standalone: true,
  template: `
    <div class="flex justify-center items-center min-h-screen ml-16 px-4">
      <div class="max-w-6xl w-full py-20">
        <div class="flex flex-col md:flex-row gap-8 w-full">
          <!-- Photo Card - Taller but narrower -->
          <div class="w-full md:w-2/5">
            <app-photo-card class="h-full"/>
          </div>

          <!-- Intro Card - Wider but shorter -->
          <div class="w-full md:w-3/5">
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
export class TestimonialsPageComponent {

}
