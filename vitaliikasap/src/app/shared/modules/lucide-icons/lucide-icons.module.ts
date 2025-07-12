import { NgModule } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Sun, Moon, Home, User, Briefcase, Layers, Mail, X, Menu, Users, MessageCircle, BookOpen, Code, MessageSquareMore } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Sun, Moon, Home, User, Briefcase, Layers, Mail, X, Menu, Users, MessageCircle, BookOpen, Code, MessageSquareMore })],
  exports: [LucideAngularModule]
})
export class LucideIconsModule {}
