export const ROOT_API = process.env.NEXT_PUBLIC_API_ROOT;
export const LEVEL_API = `${ROOT_API}/level`;
export const LOGIN_API = `${ROOT_API}/auth/login`;

export const STORAGE_KEY = {
  TOKEN: "TOKEN",
  NICKNAME: "NICKNAME",
  USERNAME: "USERNAME",
};

export const PAGINATION = {
  current: 1,
  pageSize: 10,
  showTotal: (total: number) => `共 ${total} 条数据`,
};

export const LOGIN_BG =
  "https://mini-common.oss-cn-shenzhen.aliyuncs.com/admin-login-bg.jpg";
