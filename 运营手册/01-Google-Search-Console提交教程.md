# 01 · Google Search Console 提交教程（让谷歌收录你）

> 目的：告诉谷歌你的网站存在，并提交所有页面。
> 谷歌收录后，Google 搜索和 Google AI Overviews 才可能引用你。
> 耗时：20 分钟。免费。

---

## 第 1 步：注册谷歌账号（如已有 Gmail 跳过）

1. 打开 https://accounts.google.com/signup
2. 用手机号注册（需接验证码），建议账号名用公司邮箱前缀，如 `bowei.industrial@gmail.com`
3. 有条件的建议用公司域名邮箱（如 info@anhuibowei.com），可信度更高

## 第 2 步：添加网站

1. 打开 https://search.google.com/search-console
2. 点击「开始使用」→ 选「网域」（不是"网址前缀"）
3. 输入：`anhuibowei.com` → 继续

## 第 3 步：验证域名所有权（关键，照做）

1. 谷歌会给你一条 **TXT 记录**，形如：
   ```
   google-site-verification=xxxxxxxxxxxx
   ```
2. 登录你买域名的服务商后台（阿里云/腾讯云/GoDaddy/Namecheap 等）→ 找到「域名解析 / DNS 管理」
3. 添加记录：
   | 类型 | 主机记录 | 记录值 |
   |---|---|---|
   | TXT | @ | 粘贴谷歌给的那一整条 |
4. 保存后回到 Search Console 点「验证」。
   > 注意：DNS 生效要等 10 分钟~几小时。验证失败就隔 30 分钟再点一次。

## 第 4 步：提交站点地图（Sitemap）

1. 左侧菜单 → 「Sitemap」→ 输入 `sitemap.xml` → 提交
2. 状态显示「成功」即完成（官网 sitemap 已包含全部 24 个页面）

## 第 5 步：主动提交重点页面（可选，加速收录）

左侧菜单 → 「网址检查」→ 逐个粘贴以下地址 → 「请求编入索引」：

```
https://anhuibowei.com/
https://anhuibowei.com/en/
https://anhuibowei.com/hydraulic-fixture.html
https://anhuibowei.com/en/hydraulic-fixture.html
https://anhuibowei.com/products.html
https://anhuibowei.com/en/products.html
https://anhuibowei.com/zero-point.html
https://anhuibowei.com/ball-lock.html
https://anhuibowei.com/exchange-table.html
https://anhuibowei.com/automation.html
```

## 第 6 步：之后每周看一眼

- 「效果」→ 查看哪些关键词带来流量
- 「网址检查」→ 确认页面「已编入索引」
- 收录正常后：谷歌收录一般 1-4 周，AI Overviews 引用一般 2-6 个月

---

## 常见问题

**Q：没有公司域名邮箱能注册吗？**
能，普通 Gmail 即可，域名验证走 DNS TXT 记录。

**Q：GitHub Pages 会被谷歌收录吗？**
会。anhuibowei.com 已绑定自定义域名，对谷歌完全正常。

**Q：多久能看到效果？**
收录 1-4 周；"hydraulic fixture manufacturer" 这类词排名 2-6 个月，需配合内容与站外引用持续运营。
