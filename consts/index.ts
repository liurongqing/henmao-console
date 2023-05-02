export const ROOT_API = process.env.NEXT_PUBLIC_API_ROOT;
export const LEVEL_API = `${ROOT_API}/level`;

export const PAGINATION = {
  current: 1,
  pageSize: 10,
  showTotal: (total: number) => `共 ${total} 条数据`,
};
