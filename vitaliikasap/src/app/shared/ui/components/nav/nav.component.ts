import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="flex gap-4 justify-center mt-8">
      <a routerLink="" routerLinkActive="text-emerald-600 font-bold" class="px-4 py-2 rounded-xl">Главная</a>
      <a routerLink="about" routerLinkActive="text-emerald-600 font-bold" class="px-4 py-2 rounded-xl">Обо мне</a>
      <a routerLink="resume" routerLinkActive="text-emerald-600 font-bold" class="px-4 py-2 rounded-xl">Резюме</a>
      <a routerLink="portfolio" routerLinkActive="text-emerald-600 font-bold" class="px-4 py-2 rounded-xl">Портфолио</a>
      <a routerLink="contact" routerLinkActive="text-emerald-600 font-bold" class="px-4 py-2 rounded-xl">Контакты</a>
    </nav>
  `
})
export class NavComponent {}
