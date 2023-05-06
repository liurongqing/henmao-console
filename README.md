基于 next.js + antd 开发后台








## todo
- 模仿 mini-console 把token 用户信息保存到 localstorage 中
- [x] 刚进页面会css闪一下【不合适，重新处理】

  1. 配置 StyleProvider，ssrInline 为 true

  1. 将 tailwind 优先级处理一下，添加  important: ".app" 配置

- [ ] Breadcrumb 配置

- [ ] modal 下的afterOpenChange  afterClose 会执行2次
- [x] 重置、搜索
- 新建、编辑、删除
- 全局状态管理 useContent

- [x] 搜索时，重置第一页
  通过 refCount 改变，重新发请求