//generate component with ng generate component skills-page
import {Component, inject} from '@angular/core';
import {SkillsComponent} from '../../features/skills/skills.component';
import {Meta, Title} from '@angular/platform-browser';

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
export class SkillsPageComponent {
  private meta = inject(Meta);
  private title = inject(Title);

  constructor() {
    this.title.setTitle('Skills | Vitalii Kasap — Frontend Engineer');
    this.meta.updateTag({
      name: 'description',
      content: 'Explore key frontend skills of Vitalii Kasap: Angular, React, TypeScript, UI/UX, and more.'
    });
    this.meta.updateTag({ property: 'og:title', content: 'Skills | Vitalii Kasap — Frontend Engineer' });
    this.meta.updateTag({ property: 'og:description', content: 'Explore key frontend skills of Vitalii Kasap: Angular, React, TypeScript, UI/UX, and more.' });
    this.meta.updateTag({ property: 'og:image', content: '/assets/og-image.png' });
  }
}
