import { message } from "antd";
import { STORAGE_KEY } from "@/consts";
import { storage } from "@/utils";

// 验证 http 状态
async function checkStatus(res: any) {
  if (!res.ok) {
    const error: any = new Error(
      `http 请求失败！状态：${res?.status}，原因：${res?.statusText}`
    );
    // 将额外的信息附加到错误对象上。
    try {
      error.response = await res.json();
    } catch (e) {}
    error.status = res.status;
    throw error;
  }
}

// 验证返回值
function checkResponse(response: any) {
  if (response?.code === 0) {
    return response.data;
  }

  const msg = response?.message || "服务器繁忙，请重试！";
  const error: any = new Error(msg);
  error.response = response;
  throw error;
}

export const request = async (
  url = "",
  data: any = {},
  method = "get",
  { headers = {}, timeout = 30_000, isFileUpload = false }: any = {}
) => {
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, timeout);

  method = method.toLocaleLowerCase();

  // 处理URL
  if (["get", "delete"].includes(method) && Object.keys(data).length > 0) {
    url += "?" + new URLSearchParams(data).toString();
  }

  // 处理 header
  const token = storage.getItem(STORAGE_KEY.TOKEN);
  let defaultHeaders: any = {
    ...(token ? { Authorization: `Bearer ${token}` } : null),
    "Content-Type": "application/json",
  };
  if (isFileUpload) {
    delete defaultHeaders["Content-Type"];
  }

  try {
    const res = await fetch(url, {
      method,
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      ...(!["get", "delete"].includes(method)
        ? { body: JSON.stringify(data) }
        : null),
    });
    await checkStatus(res);
    const response: any = await res.json();
    return checkResponse(response);
  } catch (error: any) {
    console.log("error", error, error?.status);
    // 失败统一处理
    if (error?.status === 401) {
      message.warning("请重新登录", 1.5, () => {
        // const a = redirect("/login");
        // window.location.replace("/login");
      });
      return;
    }

    message.error(error?.message);
    throw error;
  }
};
