import { timeout } from "./timeout";
// import { SHOW_LOADING_TIME } from "@/consts";
/**
 * 小于一定的毫秒数则不显示loading，否则至少显示一定的毫秒数
 * @param fetchs 请求组
 * @param success 请求成功处理
 * @param before 添加loading
 * @param after 移除loading
 * @returns
 */
export const fetchLoading = (fetchFn: any, before: any, after: any) => {
  const fetchs = [fetchFn, timeout(300)];

  return Promise.race(fetchs).then(async (response) => {
    if (response) {
      return response;
    } else {
      before?.();
      try {
        const res = await Promise.all(fetchs).then((response: any) => {
          return response;
        });
        return res[0];
      } catch (e) {
        return null;
      } finally {
        after?.();
      }
    }
  });
};
