import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  themeMode = signal<string>('light');

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    const newTheme = this.themeMode() === 'dark' ? 'light' : 'dark';
    this.themeMode.set(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.themeMode.set(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }
}
