import { useContext } from "react";
import { TimersContext } from "../../store/timer-context";

export function useTimersContext() {
  const ctx = useContext(TimersContext);

  if (ctx === null) {
    throw new Error("Timers context is null");
  }

  return ctx;
}
