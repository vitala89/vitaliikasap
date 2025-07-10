import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import {CursorService} from '../../services/cursor.service';

@Directive({
  selector: '[appCursorInteractive]',
  standalone: true,
})
export class CursorInteractiveDirective {
  @Input() cursorType: string = 'button';
  constructor(private el: ElementRef, private cursor: CursorService) {}

  @HostListener('mouseenter') onEnter() {
    this.cursor.setActive(this.cursorType, this.el.nativeElement);
  }
  @HostListener('mouseleave') onLeave() {
    this.cursor.setInactive();
  }
}
