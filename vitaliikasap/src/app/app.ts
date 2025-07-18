import {Component, inject, Inject, PLATFORM_ID} from '@angular/core';
import {ThemeSwitcherComponent} from './shared/ui/components/theme-switcher/theme-switcher.component';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {SideNavComponent} from './features/side-nav/components/side-nav/side-nav.component';
import {LangSwitcherComponent} from './shared/ui/components/lang-switcher/lang-switcher.component';
import {BurgerMenuComponent} from './features/burger-menu/components/burger-menu/burger-menu.component';
import {CursorComponent} from './shared/ui/components/cursor/cursor.component';
import {NetAnimationComponent} from './features/net-animation/components/net-animation.component';
import {IntroFeatureService, IntroOverlayComponent} from './features/intro';
import {OnInit} from '@angular/core';
import {DeviceDetectionService} from './shared/services/device-detection.service';
import {isPlatformBrowser} from '@angular/common';
import {MobileNavArrowsComponent} from './shared/ui/components/mobile-nav-arrows/mobile-nav-arrows.component';
import {DOCUMENT} from '@angular/common';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThemeSwitcherComponent, RouterOutlet, SideNavComponent, LangSwitcherComponent, BurgerMenuComponent, CursorComponent, NetAnimationComponent, IntroOverlayComponent, MobileNavArrowsComponent],
  template: `
    @if (!introShown()) {
      <app-intro-overlay (finished)="onIntroEnd()"/>
    }

    <app-net-animation></app-net-animation>
    <app-burger-menu class="show xl:hidden"/>

    @if (isDesktop && isBrowser) {
      <app-cursor></app-cursor>
    }

    <div class="fixed top-4 right-4 z-50 flex items-center gap-3">
      <app-lang-switcher/>
      <app-theme-switcher/>
    </div>
    <app-side-nav class="hidden xl:block"/>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-mobile-nav-arrows class="block lg:hidden"></app-mobile-nav-arrows>
  `,
})
export class App implements OnInit {
  intro = inject(IntroFeatureService);
  introShown = this.intro.introShown;
  isDesktop = false;
  isBrowser = false;

  constructor(
    private deviceService: DeviceDetectionService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private doc: Document,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.setCanonicalURL();
        });
    }
  }


  ngOnInit() {
    if (this.isBrowser) {
      this.isDesktop = this.deviceService.isDesktop;
    }
  }

  onIntroEnd() {
    this.intro.showIntro();
  }

  private setCanonicalURL() {
    let link = this.doc.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = this.doc.createElement('link') as HTMLLinkElement;
      link.rel = 'canonical';
      this.doc.head.appendChild(link);
    }
    link.href = 'https://vitaliikasap.com' + location.pathname;
  }
}
