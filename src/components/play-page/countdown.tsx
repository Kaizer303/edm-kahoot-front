import { Room, RoomStatus } from "@/types/common";
import { useEffect, useState } from "react";
type CountDownProps = {
  room: Room;
  changeState: (status: RoomStatus) => void;
};

const Countdown = ({ room, changeState }: CountDownProps) => {
  const [timer, setTimer] = useState<number>(5);

  // TODO: countdown timer
  // use time.now to count down
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      // TODO: if timer is 0 change state to start
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="m-4 flex flex-col gap-4">
      <h1>Countdown</h1>
      <h1>Timer: {timer ? timer : "0"}</h1>
    </div>
  );
};

export default Countdown;
