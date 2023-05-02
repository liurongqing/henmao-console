/**
 * 节流函数
 */
export const throttle = (fn: any, wait = 300) => {
  let inThrottle, lastTime;
  return (...args) => {
    if (!inThrottle) {
      console.log('inThrottle', inThrottle)
      // @ts-ignore
      fn.apply(this, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      if (Date.now() - lastTime >= wait) {
        // @ts-ignore
        fn.apply(this, args);
        lastTime = Date.now();
      }
    }
  };
};
