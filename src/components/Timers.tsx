import { Timer as TimerType } from "../store/timer-context";
import Timer from "./Timer";
import { useTimersContext } from "./hooks/useTimersContext";

export default function Timers() {
  const { timers } = useTimersContext();

  return (
    <ul>
      {timers.map((timer: TimerType) => {
        return (
          <li key={timer.name}>
            <Timer {...timer} />
          </li>
        );
      })}
    </ul>
  );
}
