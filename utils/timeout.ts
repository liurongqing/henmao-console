export const timeout = function (delay: number, result?: any) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(result), delay);
  });
};
