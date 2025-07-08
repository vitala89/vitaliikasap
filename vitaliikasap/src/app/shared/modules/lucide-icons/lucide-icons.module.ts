// lucide-icons.module.ts
import { NgModule } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Sun, Moon, Home, User, Briefcase, Layers, Mail, X, Menu } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Sun, Moon, Home, User, Briefcase, Layers, Mail, X, Menu })],
  exports: [LucideAngularModule]
})
export class LucideIconsModule {}
