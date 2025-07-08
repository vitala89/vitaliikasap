import { Component, OnInit } from '@angular/core';
import { NgxParticlesModule, NgParticlesService } from "@tsparticles/angular";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { MoveDirection } from "@tsparticles/engine";

@Component({
  selector: 'app-animated-bg',
  standalone: true,
  imports: [NgxParticlesModule],
  template: `
    <ngx-particles
      [id]="id"
      [options]="particlesOptions"
      (particlesLoaded)="particlesLoaded($event)"
      class="absolute inset-0 -z-10"
    ></ngx-particles>
  `,
})
export class AnimatedBgComponent implements OnInit {
  id = 'tsparticles';

  particlesOptions: ISourceOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: { enable: true }   // <-- вот так правильно!
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    particles: {
      color: { value: '#38ef7d' },
      links: { color: '#38ef7d', enable: true },
      move: {
        enable: true,
        speed: 1,
        direction: MoveDirection.none,
        outModes: { default: "bounce" }
      },
      number: { value: 60, density: { enable: true, height: 800, width: 800 } },
      opacity: { value: 0.3 },
      size: { value: 2 },
    },
    detectRetina: true,
  };


  constructor(private readonly ngParticlesService: NgParticlesService) {}

  async ngOnInit() {
    await this.ngParticlesService.init(async engine => {
      await loadSlim(engine);
    });
  }

  particlesLoaded(container: unknown): void {
    // обработка загрузки, если нужна
  }
}
