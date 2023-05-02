/**
 * 过滤属性
 * @param obj  过滤对象
 * @returns
 */
export const pickCondition = (obj: any) =>
  Object.keys(obj).reduce((o: any, prop) => {
    // 排除 null undefined ''
    if (obj[prop] || obj[prop] === 0) {
      o[prop] = obj[prop];
    }
    return o;
  }, {});