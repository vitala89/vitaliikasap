import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  template: `
    <div class="relative flex flex-col items-center bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl p-8">
      <img
        src="../../../../../assets/avatar.jpg"
        alt="Vitalii Kasap"
        width="288" height="288"
        class="w-72 h-72 object-cover rounded-3xl shadow-lg"
        loading="lazy"
      />
      <div class="w-full mt-8 text-center">
        <h2 class="text-3xl font-bold font-rounded">Vitalii Kasap</h2>
        <div class="text-lg uppercase text-neutral-400 mt-1 tracking-widest">FRONTEND ENGINEER</div>
      </div>
      <button
        class="mt-8 w-full bg-emerald-400 hover:bg-emerald-500 text-black font-semibold py-3 rounded-2xl transition text-lg"
        type="button"
        (click)="onHire()"
      >
        &nbsp;Hire Me
      </button>
    </div>
  `,
})
export class PhotoCardComponent {
  onHire() {
    window.open('mailto:your@email.com?subject=Hire%20Vitalii%20Kasap', '_blank');
  }
}
