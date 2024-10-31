import { putAnswer, putRoomStatus } from "@/services/room";
import { calculateTimeLeftInMilisecond } from "@/services/utils";
import { Choice, Room, RoomStatus } from "@/types/common";
import { Button } from "antd";
import { useEffect, useState } from "react";

type AnswerProps = {
  room: Room;
  isHost: boolean;
  changeState: (status: RoomStatus) => void;
  myName: string;
};

const Answer = ({ room, isHost, changeState, myName }: AnswerProps) => {
  const [timer, setTimer] = useState<number>(
    room?.questions[room?.currentQuestion - 1]?.timer || 0
  );
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const startTime = new Date();

  // answer
  const handleAnswer = (choice: Choice) => {
    setIsAnswered(true);
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
    <div className="flex flex-col gap-4 m-4">
      <h1>
        Question {room?.currentQuestion}/{room?.questions.length}
      </h1>
      <h1>Timer: {timer ? timer : "0"}</h1>
      <h1>{room?.questions[room?.currentQuestion - 1]?.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        {room?.questions[room?.currentQuestion - 1]?.choices.map((choice) => (
          <div key={choice.name}>
            {timer <= 0 && choice.isCorrect ? "🔥" : ""}
            <Button
              disabled={timer <= 0 || isHost || isAnswered}
              type="primary"
              key={choice.name}
              onClick={() => handleAnswer(choice)}
            >
              {`${choice.name} ${timer <= 0 ? ":" : ""} ${
                timer <= 0 ? choice.countPlayers : ""
              }`}
            </Button>
          </div>
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
