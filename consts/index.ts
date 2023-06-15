export const ROOT_API = process.env.NEXT_PUBLIC_API_ROOT;
export const LOGIN_API = `${ROOT_API}/auth/login`;
export const CHECK_LOGIN_API = `${ROOT_API}/auth/validate`;

export const LEVEL_API = `/henmao-api/level`;
export const USER_API = `/henmao-api/user`;
export const WXUSER_API = `/henmao-api/wxuser`;

// 接口都经过代理处理

// 系统管理用户信息
export const USER_CENTER_USER_API = "/user-center/user";

// 权限相关
export const AUTH_REGISTER_API = "/auth/register";

export const PAGINATION = {
  current: 1,
  pageSize: 10,
  showTotal: (total: number) => `共 ${total} 条数据`,
};

export const LOGIN_BG =
  "https://mini-common.oss-cn-shenzhen.aliyuncs.com/admin-login-bg.jpg";
