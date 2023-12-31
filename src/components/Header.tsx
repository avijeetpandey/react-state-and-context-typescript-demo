import Button from "./ui/Button.tsx";
import { useTimersContext } from "./hooks/useTimersContext.ts";

export default function Header() {
  const timersContext = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>
      <Button
        onClick={
          timersContext.isRunning
            ? timersContext.stopTimers
            : timersContext.startTimers
        }
      >
        {timersContext.isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
}
