export const calculateTimeLeftInMilisecond = (
  startTime: Date,
  currentTime: Date,
  timer: number
) => {
  return timer * 1000 - (currentTime.getTime() - startTime.getTime());
};
