import { Room } from "@/types/common";
import { Button } from "antd";
import { putRoomStatus } from "@/services/room";
interface WaitingRoomProps {
  room: Room;
  isHost: boolean;
  myName: string;
}

const WaitingRoom = ({ room, isHost, myName }: WaitingRoomProps) => {
  const handleStart = async () => {
    await putRoomStatus(room._id as string, "countdown");
  };
  return (
    <div className="flex flex-col gap-4 m-4 items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center">
        <h1>WaitingRoom</h1>
      </div>

      <h3 className="text-2xl font-bold">{myName}</h3>
      <div className="flex">
        <h3>Players: {room.players.length}</h3>
      </div>
      <div className="flex flex-row gap-2">
        <h1>PIN :</h1>
        <h1>{room.pin}</h1>
      </div>
      {isHost ? (
        <Button type="primary" onClick={handleStart}>
          Start
        </Button>
      ) : (
        <h3>Wait for host to start</h3>
      )}
    </div>
  );
};

export default WaitingRoom;
