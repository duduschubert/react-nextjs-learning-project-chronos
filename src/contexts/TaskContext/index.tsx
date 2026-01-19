import { createContext, useContext } from 'react';
import type { TaskStateModel } from '../../Models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TextContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TextContextProviderProps) {
  return (
    <TaskContext.Provider value={initialContextValue}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
