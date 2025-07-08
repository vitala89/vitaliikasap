import { Component, input } from '@angular/core';
import { Sun, Moon, X, Menu } from 'lucide-angular';

const iconsMap: Record<string, any> = {
  sun: Sun,
  moon: Moon,
  x: X,
  menu: Menu,
  // добавь нужные
};

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    @if (svgContent) {
      <span
        [attr.class]="className()"
        [style.width.px]="size()"
        [style.height.px]="size()"
        [innerHTML]="svgContent">
      </span>
    }
  `,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  icon = input.required<string>();
  className = input<string>();
  size = input<number>(24);

  get svgContent(): string | null {
    const icon = iconsMap[this.icon()];
    if (icon?.toSvg) {
      return icon.toSvg({ width: this.size(), height: this.size() });
    }
    if (icon?.svg) {
      return icon.svg;
    }
    if (icon?.template) {
      return icon.template;
    }
    return null;
  }
}
