import { Injectable, signal } from '@angular/core';
import { Task, TaskActionType } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([]);
  tasksFilter = signal<Task[]>([]);
  activeFilter = signal(false);

  getTasks() {
    return this.tasks;
  }

  getFilteredTasks() {
    return this.tasksFilter;
  }

  createTask(isCompleted: boolean, taskName: string) {
    const allTasks = this.getTasks();

    allTasks().push({ completed: isCompleted, name: taskName });

    this.tasks.set(allTasks());
  }

  removeTask(index: number) {
    const allTasks = this.getTasks();

    this.tasks.set(allTasks().filter((_, i) => i !== index));
  }

  clearCompleted() {
    const allTasks = this.getTasks();
    this.tasks.set(allTasks().filter((task) => !task.completed));
  }

  updateCompletedTask(index: number) {
    const tasks = this.getTasks();

    this.tasks.set(
      tasks().map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  filterTask(action: TaskActionType) {
    const allTasks = this.getTasks();

    switch (action) {
      case 'All':
        this.activeFilter.set(false);

        return this.tasks.set(allTasks());
      case 'Active':
        this.activeFilter.set(true);
        return this.tasksFilter.set(
          allTasks().filter((task) => !task.completed)
        );
      case 'Completed':
        this.activeFilter.set(true);
        return this.tasksFilter.set(
          allTasks().filter((task) => task.completed)
        );
    }
  }
}
