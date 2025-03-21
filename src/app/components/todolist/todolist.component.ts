import { Component, inject, signal } from '@angular/core';
import { TodoitemComponent } from './todoitem/todoitem.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todolist',
  imports: [TodoitemComponent],
  templateUrl: './todolist.component.html',
})
export class TodolistComponent {
  taskService = inject(TaskService);
  tasks = this.taskService.getTasks();
  filteredTasks = this.taskService.getFilteredTasks();
  isActiveFilter = this.taskService.activeFilter;

  get getNonCompletedTasksLength() {
    return this.tasks().filter((task) => !task.completed).length;
  }

  clearCompleted() {
    this.taskService.clearCompleted();
  }
}
