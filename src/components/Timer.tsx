import Container from "./ui/Container.tsx";
import { type Timer as TimerProps } from "./../store/timer-context.tsx";
import { useEffect, useRef, useState } from "react";
import { useTimersContext } from "./hooks/useTimersContext.ts";

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const timerReference = useRef<number | null>(null);
  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && timerReference.current) {
    clearInterval(timerReference.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTime((previousTime) => previousTime - 50);
      }, 50);

      timerReference.current = timer;
    } else if (timerReference.current) {
      clearInterval(timerReference.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
