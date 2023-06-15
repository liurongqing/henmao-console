export const ROOT_API = process.env.NEXT_PUBLIC_API_ROOT;
export const LOGIN_API = `${ROOT_API}/auth/login`;
export const CHECK_LOGIN_API = `${ROOT_API}/auth/validate`;

export const LEVEL_API = `/henmao-api/level`;
export const USER_API = `/henmao-api/user`;

// 接口都经过代理处理

/**
 * 用户中心接口
 */
// 系统管理用户信息
export const USER_CENTER_USER_API = "/user-center/user";
export const USER_CENTER_WXUSER_API = "/user-center/wxuser";

// 权限相关
export const AUTH_REGISTER_API = "/auth/register";

// yummi 美味消一消游戏
export const YUMMI_LEVEL_API = "/mini-yummi/level";

export const PAGINATION = {
  current: 1,
  pageSize: 10,
  showTotal: (total: number) => `共 ${total} 条数据`,
};

export const LOGIN_BG =
  "https://mini-common.oss-cn-shenzhen.aliyuncs.com/admin-login-bg.jpg";
