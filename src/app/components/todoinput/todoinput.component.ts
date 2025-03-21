import {
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todoinput',
  imports: [FormsModule],
  templateUrl: './todoinput.component.html',
})
export class TodoinputComponent {
  private taskService = inject(TaskService);
  inputRef = viewChild.required<ElementRef<HTMLInputElement>>('inputText');
  isCompleted = signal(false);

  handleSubmit(isCompleted: boolean, taskName: string) {
    if (taskName.length) {
      this.taskService.createTask(isCompleted, taskName);
      this.inputRef().nativeElement.value = '';
      this.isCompleted.set(false);
    }
  }

  handleClick() {
    this.isCompleted.update((isComplete) => !isComplete);
  }
}
