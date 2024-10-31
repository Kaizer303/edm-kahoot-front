import { Room } from "@/types/common";

export const LOCALE = {
  TH: "th",
  EN: "en",
};

export const SUPPORTED_LOCALES = [LOCALE.TH, LOCALE.EN];

export const ROOM_INIT: Room = {
  _id: "8913751",
  currentQuestion: 0,
  pin: "1234",
  hostID: "123123123123",
  status: "wait", // ["wait","countdown", "start", "summarize", "end"]
  players: [
    {
      name: "Player 1",
      score: 0,
    },
  ],
  questions: [
    {
      _id: "123123123123",
      name: "Question 1",
      timer: 10,
      choices: [
        {
          name: "Choice 1",
          isCorrect: false,
          countPlayers: 0,
        },
      ],
    },
  ],
};
