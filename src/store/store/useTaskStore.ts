import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Task {
  id: string;
  projectId: string;
  title: string;
  status: string;
  assignee: string;
}

interface TaskState {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
}

export const useTaskStore = create<TaskState>()(persist(
  (set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    updateTask: (id, updates) => set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),
    deleteTask: (id) => set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),
  }),
  {
    name: 'task-storage',
    storage: {
      getItem: (name) => {
        const str = localStorage.getItem(name);
        return str ? JSON.parse(str) : null;
      },
      setItem: (name, value) => {
        localStorage.setItem(name, JSON.stringify(value));
      },
      removeItem: (name) => localStorage.removeItem(name),
    },
  }
));
