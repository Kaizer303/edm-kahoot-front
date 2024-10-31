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
  hostName: "123123123123",
  status: "wait",
  players: [
    {
      _id: '123',
      name: "nunt",
      score: 10,
    },
    {
      _id: '123',
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
          _id: '123',
          name: "ไทย",
          isCorrect: true,
          countPlayers: 2,
        },
        {
          _id: '123',
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
          _id: '123',
          name: "กรุงเทพ",
          isCorrect: true,
          countPlayers: 3,
        },
        {
          _id: '123',
          name: "เชียงใหม่",
          isCorrect: false,
          countPlayers: 0,
        },
      ],
    },
  ],
};
