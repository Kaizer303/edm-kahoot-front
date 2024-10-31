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