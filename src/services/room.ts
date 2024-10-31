import axios from "axios";
import configs from "@/configs";

// TODO: implement room service get /rooms/:id
export const getRoom = async (roomId: string) => {
  const response = await axios.get(`${configs.API_URL}/rooms/${roomId}`);
  return response.data;
};
