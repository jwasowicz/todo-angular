export interface Task {
  completed: boolean;
  name: string;
}

export type TaskActionType = 'All' | 'Active' | 'Completed';
