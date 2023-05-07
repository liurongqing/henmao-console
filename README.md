基于 next.js + antd 开发后台


## todo


**重要：**

- [ ] 退出登录，及显示昵称
- [ ] 后端接口从数据库中读数据，登录信息
- [ ] 想想关卡需要的信息， 以及制作定时任务了
- [ ] 部署到 vercel 上




**不着急**
- [ ] 登录应该有个 checkLogin，  登录之前做判断，在页面之前，或是Login之前【完成一半】
- [ ] Breadcrumb 配置
- [ ] modal 下的afterOpenChange  afterClose 会执行2次

- [x] 模仿 mini-console 把token 用户信息保存到 localstorage 中
- [x] 重置、搜索
- [x] 新建、编辑、删除
- [x] 全局状态管理 useContent
- [x] 搜索时，重置第一页
  通过 refCount 改变，重新发请求
- [x] 回车登录
  button 加个  htmlType="submit" 即可
- [x] 刚进页面会css闪一下【不合适，重新处理】
  1. 配置 StyleProvider，ssrInline 为 true
  1. 将 tailwind 优先级处理一下，添加  important: ".app" 配置
- [x] 样式处理，最后选择, 打整体包，参考下面customize-theme-cn
  参考地址：https://ant.design/docs/blog/extract-ssr-cn
  参考地址：https://ant.design/docs/react/customize-theme-cn
- [x] 无限调用store设置，然后卡死
  配置level/page.tsx 不为 async 函数，就不会死循环了，也不用添加 loading.tsx