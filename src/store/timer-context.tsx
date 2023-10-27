import { type ReactNode, createContext, useReducer } from "react";

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

type StopTimerAction = {
  type: "STOP_TIMER";
};

type StartTimerAction = {
  type: "START_TIMER";
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type Action = StopTimerAction | StartTimerAction | AddTimerAction;

export const TimersContext = createContext<TimersContextValue | null>(null);

const initialState: TimerState = {
  isRunning: true,
  timers: []
};

// Provider for the context API
type TimerContextProviderProps = {
  children: ReactNode;
};

// Timers reducer
function timersReducer(state: TimerState, action: Action): TimerState {
  if (action.type === "START_TIMER") {
    return {
      ...state,
      isRunning: true
    };
  }

  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration
        }
      ]
    };
  }

  if (action.type === "STOP_TIMER") {
    return {
      ...state,
      isRunning: false
    };
  }

  return state;
}

export default function TimerContextProvider({
  children
}: TimerContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    isRunning: timersState.isRunning,
    timers: timersState.timers,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMER" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMER" });
    }
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
