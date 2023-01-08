export const createEndingForUserWord = (num) => {
  num = Math.abs(num) % 100;
  const value = num % 10;
  if (num > 10 && num < 20) return "человек";
  if (value > 1 && value < 5) return "человека";
  return "человек";
};
