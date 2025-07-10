// src/app/custom-cursor.service.ts
import { Injectable, Signal, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CursorService {
  private _cursorState = signal<{ type: string, element: HTMLElement | null }>({ type: 'default', element: null });
  cursorState: Signal<{ type: string, element: HTMLElement | null }> = this._cursorState.asReadonly();

  setActive(type: string, element: HTMLElement) {
    this._cursorState.set({ type, element });
  }

  setInactive() {
    this._cursorState.set({ type: 'default', element: null });
  }
}
