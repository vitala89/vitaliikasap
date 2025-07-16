import { Directive, HostListener } from '@angular/core';
import { applyPushedEffect, removePushedEffect } from '../utils/pushed-effect.util';

/**
 * Directive that applies pushed effect to buttons on mouse/touch interactions
 * Usage: <button appPushedEffect>Button</button>
 */
@Directive({
  selector: '[appPushedEffect]',
  standalone: true
})
export class PushedEffectDirective {

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    applyPushedEffect(event);
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    removePushedEffect(event);
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent): void {
    removePushedEffect(event);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    applyPushedEffect(event);
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    removePushedEffect(event);
  }

  @HostListener('touchcancel', ['$event'])
  onTouchCancel(event: TouchEvent): void {
    removePushedEffect(event);
  }
}
