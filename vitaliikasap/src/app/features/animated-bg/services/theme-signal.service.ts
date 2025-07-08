import { signal } from '@angular/core';

export const themeSignal = signal<'dark' | 'light'>('light');
