import { NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Task } from '../../../models/task.model';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-todoitem',
  imports: [NgClass],
  templateUrl: './todoitem.component.html',
})
export class TodoitemComponent {
  private taskService = inject(TaskService);
  item = input.required<Task>();
  index = input.required<number>();
  first = input.required<boolean>();

  handleRemove(index: number) {
    this.taskService.removeTask(index);
  }

  handleCompleteTask(index: number) {
    this.taskService.updateCompletedTask(index);
  }
}
