import axios from "axios";
import configs from "@/configs";

export const getRoom = async (roomId: string) => {
  const response = await axios.get(`${configs.API_URL}/rooms/${roomId}`);
  return response.data;
};

export const joinRoom = async (roomId: string, username: string) => {
  const { data } = await axios.post(`${configs.API_URL}/rooms/${roomId}/join`, {
    name: username,
  })
  return data
}
export const putRoomStatus = async (roomId: string, status: string) => {
  const response = await axios.put(
    `${configs.API_URL}/rooms/${roomId}/status`,
    {
      status,
    }
  );
  return response.data;
};

export const putAnswer = async (
  roomId: string,
  answerId: string,
  playerName: string,
  remainTimer: number,
  answer: string
) => {
  const response = await axios.put(
    `${configs.API_URL}/rooms/${roomId}/question/${answerId}/answer`,
    {
      playerName,
      remainTimer,
      answer,
    }
  );
  return response.data;
};
