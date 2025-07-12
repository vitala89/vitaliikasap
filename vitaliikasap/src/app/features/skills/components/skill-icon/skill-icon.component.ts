import { Component, Input } from '@angular/core';
import { LucideIconsModule } from '../../../../shared/modules/lucide-icons/lucide-icons.module';

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  imports: [LucideIconsModule],
  template: `
    @switch (icon) {
      @case ('angular') {
        <i class="devicon-angular-plain text-5xl text-red-600 text-center"></i>
      }
      @case ('react') {
        <i class="devicon-react-original text-5xl text-sky-600 text-center"></i>
      }
      @case ('typescript') {
        <i class="devicon-typescript-plain colored text-5xl"></i>
      }
      @case ('javascript') {
        <i class="devicon-javascript-plain colored text-5xl"></i>
      }
      @case ('html5') {
        <i class="devicon-html5-plain-wordmark colored text-5xl"></i>
      }
      @case ('css3') {
        <i class="devicon-css3-plain-wordmark colored text-5xl"></i>
      }
      @case ('redux') {
        <i class="devicon-redux-original colored text-5xl"></i>
      }
      @case ('nodejs') {
        <i class="devicon-nodejs-plain-wordmark colored text-5xl"></i>
      }
      @case ('express') {
        <i class="devicon-express-original colored text-5xl"></i>
      }
      @case ('jest') {
        <i class="devicon-jest-plain colored text-5xl"></i>
      }
      @case ('docker') {
        <i class="devicon-docker-plain-wordmark colored text-5xl"></i>
      }
      @case ('git') {
        <i class="devicon-git-plain colored text-5xl"></i>
      }
      @case ('webpack') {
        <i class="devicon-webpack-plain colored text-5xl"></i>
      }
      @case ('vite') {
        <i class="devicon-vitejs-plain text-5xl"></i>
      }
      @case ('figma') {
        <i class="devicon-figma-plain colored text-5xl"></i>
      }
      @case ('api') {
        <i class="devicon-openapi-plain colored text-5xl"></i>
      }
      @case ('cicd') {
        <i class="devicon-githubactions-plain colored text-5xl"></i>
      }
      @default {
        <lucide-icon name="code" class="w-10 h-10"/>
      }
    }
  `
})
export class SkillIconComponent {
  @Input() icon = '';
}
