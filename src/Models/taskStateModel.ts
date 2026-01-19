import type { TaskModel } from "./TaskModel";

// Estado -> Componente -> Repassar para componentes filhos

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // numero de 1 a 8 que contam os ciclos do Pomodoro
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};