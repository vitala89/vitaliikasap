import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IntroFeatureService {
  introShown = signal<boolean>(false);
  showIntro() {
    this.introShown.set(true);
  }
}
