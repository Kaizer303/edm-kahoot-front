import { Room } from "@/types/common";
import { Button } from "antd";

type AnswerProps = {
  room: Room;
  isHost: boolean;
};

const Answer = ({ room, isHost }: AnswerProps) => {
  return (
    <div className="flex flex-col gap-4 m-4">
      <h1>
        Question {room?.currentQuestion}/{room?.questions.length}
      </h1>
      <h1>{room?.questions[room?.currentQuestion - 1]?.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        {room?.questions[room?.currentQuestion - 1]?.choices.map((choice) => (
          <Button type="primary" key={choice.name}>
            {choice.name}
          </Button>
        ))}
      </div>
      {isHost && <Button type="primary">Next</Button>}
    </div>
  );
};

export default Answer;
