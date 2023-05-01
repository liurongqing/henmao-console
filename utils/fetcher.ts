export const fetcher = (...args: [string, any]) =>
  fetch(...args).then((res) => res.json());
