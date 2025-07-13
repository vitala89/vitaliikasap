import { Component } from '@angular/core';
import {ContactFormComponent} from './components';

@Component({
  selector: 'app-contact',
  imports: [
    ContactFormComponent
  ],
  template: `
    <app-contact-form></app-contact-form>`
})
export class ContactComponent {}
