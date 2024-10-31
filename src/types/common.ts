interface PageProps {
  params: {
    locale: string;
  };
}

interface LayoutProps extends React.PropsWithChildren, PageProps {}

interface KeyValueObject {
  [key: string]: string | KeyValueObject;
}

type Room = {
  _id?: string;
  currentQuestion: number;
  pin: string;
  hostID: string;
  status: string;
  players: Player[];
  questions: Question[];
};

type Player = {
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
};
