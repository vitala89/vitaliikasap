import { NgModule } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Sun, Moon, Home, User, Briefcase, Layers, Mail, X, Menu, Users, MessageCircle, BookOpen, Code, MessageSquareMore, Quote, Linkedin, ChevronLeft, ChevronRight } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ Sun, Moon, Home, User, Briefcase, Layers, Mail, X, Menu, Users, MessageCircle, BookOpen, Code, MessageSquareMore, Quote, Linkedin, ChevronLeft, ChevronRight })],
  exports: [LucideAngularModule]
})
export class LucideIconsModule {}
