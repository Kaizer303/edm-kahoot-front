import { Room } from "@/types/common";
import { Button } from "antd";

interface WaitingRoomProps {
  room: Room;
  isHost: boolean;
  myName: string;
}

const WaitingRoom = ({ room, isHost, myName }: WaitingRoomProps) => {
  return (
    <div className="flex flex-col gap-4 m-4">
      <div className="flex justify-between">
        <h2>WaitingRoom</h2>
        <h2>{myName}</h2>
      </div>
      <div className="flex justify-between">
        <h2>Players: {room.players.length}</h2>
      </div>
      <div className="flex flex-col">
        <h2>PIN</h2>
        <h2>{room.pin}</h2>
      </div>
      {isHost ? (
        <Button type="primary">Start</Button>
      ) : (
        <h2>Wait for host to start</h2>
      )}
    </div>
  );
};

export default WaitingRoom;
