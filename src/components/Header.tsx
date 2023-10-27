import Button from "./UI/Button.tsx";
import { useTimersContext } from "./hooks/useTimersContext.ts";

export default function Header() {
  const timersContext = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timersContext.isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
}
