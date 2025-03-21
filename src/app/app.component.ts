import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TodoinputComponent } from './components/todoinput/todoinput.component';
import { FilterbuttonsComponent } from './components/filterbuttons/filterbuttons.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todochallenge';
}
