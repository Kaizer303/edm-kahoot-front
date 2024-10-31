import { Room } from "@/types/common";

export const LOCALE = {
  TH: "th",
  EN: "en",
};

export const SUPPORTED_LOCALES = [LOCALE.TH, LOCALE.EN];

export const ROOM_INIT: Room = {
  _id: "123213123",
  currentQuestion: 1,
  pin: "1234",
  hostID: "123123123123",
  status: "wait",
  players: [
    {
      name: "nunt",
      score: 10,
    },
    {
      name: "john",
      score: 5,
    },
  ],
  questions: [
    {
      _id: "12312312312",
      name: "ประเทศอะไร",
      timer: 10,
      choices: [
        {
          name: "ไทย",
          isCorrect: true,
          countPlayers: 2,
        },
        {
          name: "ญี่ปุ่น",
          isCorrect: false,
          countPlayers: 1,
        },
      ],
    },
    {
      _id: "12312312313",
      name: "เมืองหลวงของไทยคืออะไร",
      timer: 15,
      choices: [
        {
          name: "กรุงเทพ",
          isCorrect: true,
          countPlayers: 3,
        },
        {
          name: "เชียงใหม่",
          isCorrect: false,
          countPlayers: 0,
        },
      ],
    },
  ],
};
