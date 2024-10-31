"use client";

import { useParams } from "next/navigation";
import Answer from "@/components/play-page/answer";
import Countdown from "@/components/play-page/countdown";
import WaitingRoom from "@/components/play-page/waiting-room";
import { ROOM_INIT } from "@/constants";
import { Room, RoomStatus } from "@/types/common";
import { Button } from "antd";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/contexts/user";
import Summarize from "@/components/play-page/summarize";
import { getRoom } from "@/services/room";

const PlayPage = () => {
  const params = useParams();
  const [roomId, setRoomId] = useState<string>("");
  const { username } = useContext(UserContext);
  const [data, setData] = useState<Room>(ROOM_INIT);
  const [isHost, setIsHost] = useState<boolean>(false);
  const [myName, setMyName] = useState<string>("HOST");

  useEffect(() => {
    setRoomId(params.roomId as string);
  }, [params.roomId]);

  useEffect(() => {
    // TODO: if is not host polling room data every 500 miliseconds
    if (!isHost) {
      const interval = setInterval(() => {
        getRoom(roomId).then((data) => setData(data));
      }, 500);
      return () => clearInterval(interval);
    }
    console.log(data);
  }, [data, isHost]);

  useEffect(() => {
    setMyName(username);
    if (username === data.hostName) {
      setIsHost(true);
    }
  }, [username]);

  const changeState = (status: RoomStatus) => {
    setData({ ...data, status: status });
  };

  console.log(data);

  return (
    <div>
      <div className="flex flex-col h-32 items-center justify-center bg-slate-500 text-white">
        <div className="flex flex-row gap-4 items-center justify-center">
          <Button type="primary" onClick={() => changeState("wait")}>
            wait
          </Button>
          <Button type="primary" onClick={() => changeState("countdown")}>
            countdown
          </Button>
          <Button type="primary" onClick={() => changeState("start")}>
            start
          </Button>
          <Button type="primary" onClick={() => changeState("summarize")}>
            summarize
          </Button>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <Button type="primary" onClick={() => setIsHost(!isHost)}>
            dev change host
          </Button>
          <h1>{isHost ? "HOST PREVIEW" : "PLAYER PREVIEW"}</h1>
        </div>
      </div>
      {data?.status === "wait" ? (
        <WaitingRoom room={data} isHost={isHost} myName={myName} />
      ) : data?.status === "countdown" ? (
        <Countdown room={data} />
      ) : data?.status === "start" ? (
        <Answer room={data} isHost={isHost} />
      ) : data?.status === "summarize" ? (
        <Summarize room={data} isHost={isHost} />
      ) : (
        <div>No page</div>
      )}
    </div>
  );
};

export default PlayPage;
