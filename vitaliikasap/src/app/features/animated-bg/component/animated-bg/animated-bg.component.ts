import { Component, OnInit, computed, effect } from '@angular/core';
import { NgxParticlesModule, NgParticlesService } from "@tsparticles/angular";
import { loadSlim } from "@tsparticles/slim";
import { themeSignal } from '../../../../shared/services/theme-signal.service';
import { MoveDirection, OutMode, Container } from "@tsparticles/engine";

@Component({
  selector: 'app-animated-bg',
  standalone: true,
  imports: [NgxParticlesModule],
  template: `
    <ngx-particles
      [id]="id"
      [options]="particlesOptions()"
      (particlesLoaded)="particlesLoaded($event)"
      class="absolute inset-0 -z-10"
    ></ngx-particles>
  `,
})
export class AnimatedBgComponent implements OnInit {
  id = 'tsparticles';
  particlesContainer?: Container;

  // Считаем параметры динамически через computed
  particlesOptions = computed(() => {
    const isDark = themeSignal() === 'dark';
    return {
      background: { color: { value: isDark ? '#0d0d0d' : '#ffffff' } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true }
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 }
        }
      },
      particles: {
        color: { value: isDark ? '#6a11cb' : '#6a11cb' },
        links: { color: isDark ? '#6a11cb' : '#6a11cb', enable: true },
        move: {
          enable: true,
          speed: 1,
          direction: MoveDirection.none,
          outModes: { default: OutMode.bounce }
        },
        number: { value: 60, density: { enable: true, height: 800, width: 800 } },
        opacity: { value: 0.3 },
        size: { value: 2 },
      },
      detectRetina: true,
    };
  });

  constructor(private readonly ngParticlesService: NgParticlesService) {
    // Обновляем контейнер при смене темы
    effect(() => {
      if (this.particlesContainer) {
        void this.particlesContainer.refresh();
      }
    });
  }

  async ngOnInit() {
    await this.ngParticlesService.init(async engine => {
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    this.particlesContainer = container;
  }
}
