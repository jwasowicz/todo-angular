import { Component, inject, signal } from '@angular/core';
import { TaskActionType } from '../../models/task.model';
import { NgClass } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-filterbuttons',
  imports: [NgClass],
  templateUrl: './filterbuttons.component.html',
})
export class FilterbuttonsComponent {
  activeFilter = signal<TaskActionType>('All');
  private taskService = inject(TaskService);
  tasks = this.taskService.getTasks();

  handleFilter(action: TaskActionType) {
    this.activeFilter.set(action);
    this.taskService.filterTask(action);
  }
}
