import { Room } from "@/types/common";
import { useEffect, useState } from "react";
type CountDownProps = {
  room: Room;
};

const Countdown = ({ room }: CountDownProps) => {
  const [timer, setTimer] = useState<number>(
    room?.questions[room?.currentQuestion - 1]?.timer || 0
  );

  // TODO: countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      <h1>Countdown</h1>
      <h1>Timer: {timer ? timer : "00"}</h1>
    </div>
  );
};

export default Countdown;
