import { Component } from '@angular/core';
import {ResumeComponent} from '../../features/resume/resume.component';

@Component({
  selector: 'app-resume-page',
  imports: [
    ResumeComponent
  ],
  template: `
    <app-resume></app-resume>
  `,})
export class ResumePageComponent {

}
