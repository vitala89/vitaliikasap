import { animate, query, style, transition, trigger, group } from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'scale(0.92)' })
    ], { optional: true }),

    query(':leave', [
      animate('0.6s cubic-bezier(.4,0,.2,1)', style({ opacity: 0, transform: 'scale(0.92)' }))
    ], { optional: true }),

    query(':enter', [
      animate('0.6s cubic-bezier(.4,0,.2,1)', style({ opacity: 1, transform: 'scale(1)' }))
    ], { optional: true }),
  ])
]);
