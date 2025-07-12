import { Component } from '@angular/core';
import {TestimonialsSliderComponent} from './testimonials-slider/testimonials-slider.component';

@Component({
  selector: 'app-testimonials',
  imports: [
    TestimonialsSliderComponent
  ],
  template: `
    <app-testimonials-slider></app-testimonials-slider>`
})
export class TestimonialsComponent {}
