import { Room, RoomStatus } from "@/types/common";
import { useEffect, useState } from "react";
type CountDownProps = {
  room: Room;
  changeState: (status: RoomStatus) => void;
};

const bgColors = [
  'bg-red-400',
  'bg-green-400',
  'bg-yellow-400',
  'bg-cyan-400',
  'bg-purple-400',
]

const Countdown = ({ room, changeState }: CountDownProps) => {
  const [timer, setTimer] = useState<number>(5);
  const [bg, setBg] = useState<string>(bgColors[4])

  // TODO: countdown timer
  // use time.now to count down
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        setBg(bgColors[timer - 2])
      }
      // TODO: if timer is 0 change state to start
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className={`flex justify-center items-center min-h-screen ${bg}`}>
      <div className="max-w-lg w-full text-center p-4">
        <div className="text-center text-white">
          <h1>Starting in ...</h1>
          <h1>{timer ? timer : "0"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
