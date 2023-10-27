import { type ReactNode, createContext } from "react";

type Timer = {
  name: string;
  duration: string;
};

type TimerState = {
  isRunning: boolean;
  timers: Array<Timer>;
};

type TimersContextValue = TimerState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export const TimersContext = createContext<TimersContextValue | null>(null);

// Provider for the context API
type TimerContextProviderProps = {
  children: ReactNode;
};

export default function TimerContextProvider({
  children
}: TimerContextProviderProps) {
  const ctx: TimersContextValue = {
    isRunning: false,
    timers: [],
    addTimer(timerData) {
      console.log(timerData);
    },
    startTimers() {},
    stopTimers() {}
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
