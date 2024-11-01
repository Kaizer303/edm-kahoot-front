import { putAnswer, putRoomStatus } from "@/services/room";
import { calculateTimeLeftInMilisecond } from "@/services/utils";
import { Choice, Room, RoomStatus } from "@/types/common";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { CheckSquareOutlined } from "@ant-design/icons";

type AnswerProps = {
  room: Room;
  isHost: boolean;
  changeState: (status: RoomStatus) => void;
  myName: string;
};

const Answer = ({ room, isHost, changeState, myName }: AnswerProps) => {
  const [myAnswer, setMyAnswer] = useState<Choice | null>(null);
  const [timer, setTimer] = useState<number>(
    room?.questions[room?.currentQuestion - 1]?.timer || 0
  );
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const startTime = new Date();

  // answer
  const handleAnswer = (choice: Choice) => {
    setIsAnswered(true);
    setMyAnswer(choice);
    putAnswer(
      room?._id as string,
      room?.questions[room?.currentQuestion - 1]._id as string,
      myName,
      calculateTimeLeftInMilisecond(startTime, new Date(), timer),
      choice.name
    ).catch((error) => {
      console.error(error);
      setIsAnswered(false);
    });
  };

  const handleNext = () => {
    putRoomStatus(room?._id as string, "summarize");
  };

  // TODO: countdown timer
  // use time.now to count down
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="flex flex-col gap-4 m-4 w-full">
      <div className="flex flex-col justify-center items-center">
        <h1>{room?.questions[room?.currentQuestion - 1]?.name}</h1>
        <div className="flex flex-row gap-4 bg-orange-400 text-white rounded-full p-2 h-10 w-10 items-center justify-center">
          <h2>{timer ? timer : "0"}</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {room?.questions[room?.currentQuestion - 1]?.choices.map((choice) => (
          <Button
            style={{
              backgroundColor:
                choice.isCorrect && (timer <= 0 || isHost)
                  ? "#237804" // green
                  : myAnswer?.name === choice.name
                    ? "#1890ff" // blue
                    : timer <= 0 || isHost || isAnswered
                      ? "#d9d9d9" // disabled gray
                      : "#1890ff", // default blue
              opacity: timer <= 0 || isHost || isAnswered ? 0.65 : 1,
            }}
            disabled={timer <= 0 || isHost || isAnswered}
            icon={timer <= 0 && choice.isCorrect ? <CheckSquareOutlined /> : ""}
            type="primary"
            key={choice.name}
            onClick={() => handleAnswer(choice)}
          >
            {`${choice.name} ${timer <= 0 ? ":" : ""} ${
              timer <= 0 ? choice.countPlayers : ""
            }`}
          </Button>
        ))}
      </div>
      {isHost && (
        <Button type="primary" onClick={handleNext}>
          Next
        </Button>
      )}
    </div>
  );
};

export default Answer;
