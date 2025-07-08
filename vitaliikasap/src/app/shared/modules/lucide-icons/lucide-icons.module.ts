// lucide-icons.module.ts
import { NgModule } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Sun, Moon } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Sun, Moon })],
  exports: [LucideAngularModule]
})
export class LucideIconsModule {}
