import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume-page/resume-page.component').then(m => m.ResumePageComponent),
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills-page/skills-page.component').then(m => m.SkillsPageComponent),
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./pages/testimonials-page/testimonials-page.component').then(m => m.TestimonialsPageComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
