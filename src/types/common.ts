interface PageProps {
  params: {
    locale: string;
  };
}

interface LayoutProps extends React.PropsWithChildren, PageProps {}

interface KeyValueObject {
  [key: string]: string | KeyValueObject;
}

export type RoomStatus = "wait" | "countdown" | "start" | "summarize" | "end";

type Room = {
  _id?: string;
  currentQuestion: number;
  pin: string;
  hostName: string;
  status: RoomStatus;
  players: Player[];
  questions: Question[];
};

type Player = {
  _id: string;
  name: string;
  score: number;
};

type Question = {
  _id?: string;
  name: string;
  timer: number;
  choices: Choice[];
};

type Choice = {
  _id: string;
  name: string;
  isCorrect: boolean;
  countPlayers?: number;
};

export type {
  LayoutProps,
  KeyValueObject,
  PageProps,
  Room,
  Player,
  Question,
  Choice,
}
