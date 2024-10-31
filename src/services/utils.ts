export const calculateTimeLeftInMilisecond = (
  startTime: number,
  timer: number
) => {
  return timer * 1000 - (Date.now() - startTime);
};
