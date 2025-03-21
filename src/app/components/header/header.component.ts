import { Component, inject, signal } from '@angular/core';
import { TodoinputComponent } from '../todoinput/todoinput.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { FilterbuttonsComponent } from '../filterbuttons/filterbuttons.component';
import { DarkModeService } from '../../services/darkmode.service';

@Component({
  selector: 'app-header',
  imports: [TodoinputComponent, TodolistComponent, FilterbuttonsComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private themeService = inject(DarkModeService);
  themeMode = this.themeService.themeMode;

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
