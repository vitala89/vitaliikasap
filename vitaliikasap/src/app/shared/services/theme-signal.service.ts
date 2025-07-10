import { signal } from '@angular/core';

export type ThemeType = 'dark' | 'light';

export const themeSignal = signal<ThemeType>('light');
