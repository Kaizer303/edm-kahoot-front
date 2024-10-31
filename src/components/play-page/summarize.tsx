import { Player, Room } from "@/types/common";
import { Button, List, Select } from "antd";
import { useEffect, useState } from "react";

type SummarizeProps = {
  room: Room;
  isHost: boolean;
};

const Summarize = ({ room, isHost }: SummarizeProps) => {
  const [numberOfPlayer, setNumberOfPlayer] = useState<number>(
    room.players.length
  );
  const [sortedPlayers, setSortedPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const sortedPlayers = room.players
      .sort((a, b) => b.score - a.score)
      .slice(0, numberOfPlayer);
    setSortedPlayers(sortedPlayers);
  }, [room.players, numberOfPlayer]);

  console.log(numberOfPlayer);

  const handleNext = () => {
    console.log("next");
  };

  return (
    <div className="flex flex-col gap-4 m-4">
      <h1>Summarize</h1>
      <List
        itemLayout="horizontal"
        dataSource={sortedPlayers}
        renderItem={(item) => (
          <List.Item>
            {item.name} Score: {item.score}
          </List.Item>
        )}
      />
      <div className="flex flex-row gap-2 justify-center items-center">
        <h2>แสดงผลลัพธ์ของผู้เล่นที่มีคะแนนสูงสุด</h2>
        {/* drop down choose number of player render */}
        <Select
          value={numberOfPlayer}
          onChange={(value) => {
            setNumberOfPlayer(Number(value));
          }}
        >
          {room?.players.map((_, index) => (
            <Select.Option value={index + 1}>{index + 1}</Select.Option>
          ))}
        </Select>
        <h2> ลำดับ</h2>
      </div>
      {isHost && (
        <Button type="primary" onClick={() => handleNext()}>
          Next
        </Button>
      )}
    </div>
  );
};

export default Summarize;
