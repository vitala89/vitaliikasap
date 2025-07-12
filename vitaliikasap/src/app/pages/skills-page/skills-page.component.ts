//generate component with ng generate component skills-page
import { Component } from '@angular/core';
import {SkillsComponent} from '../../features/skills/skills.component';

@Component({
  selector: 'app-skills-page',
  template: `
    <app-skills></app-skills>
  `,
  imports: [
    SkillsComponent
  ],
  styles: []
})
export class SkillsPageComponent { }
