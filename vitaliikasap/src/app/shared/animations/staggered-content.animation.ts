import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const staggeredContentAnimation = trigger('staggeredContent', [
  transition(':enter', [
    query('.stagger-item', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger(200, [
        animate('0.8s cubic-bezier(.4,0,.2,1)', style({ opacity: 1, transform: 'translateY(0px)' }))
      ])
    ], { optional: true })
  ])
]);
