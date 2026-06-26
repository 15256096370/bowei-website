# 安徽柏威工业技术有限公司 · 官方网站

> 中英双语 · 红色工业商务风 · 纯静态网站（无需后端，永久免费托管）

---

## 📁 项目结构

```
bowei-website/
├── index.html              # 首页（中文）
├── about.html              # 关于我们（中文）
├── products.html           # 产品中心（中文）
├── cases.html              # 应用案例（中文）
├── news.html               # 新闻资讯（中文）
├── contact.html            # 联系我们（中文）
├── en/                     # 英文版（结构同中文）
│   ├── index.html
│   ├── about.html
│   ├── products.html
│   ├── cases.html
│   ├── news.html
│   └── contact.html
├── css/
│   └── style.css           # 全站设计系统（红色工业商务风）
├── js/
│   └── main.js             # 全站交互（导航/动效/筛选/表单）
├── assets/                 # 图片资源（LOGO、产品图、设备图、案例图等）
└── README.md               # 本文件
```

## 🎨 设计规范

| 项目 | 规格 |
|------|------|
| 主色 | `#c8102e` 工业红（LOGO 红） |
| 辅色 | `#8b0a1f` 深红 · `#1a1a1a` 炭黑 · `#f5b800` 金（数字高亮） |
| 中文字体 | PingFang SC / Microsoft YaHei |
| 英文字体 | Inter / Segoe UI |
| 响应式 | 桌面 / 平板 / 手机三端自适应 |

## 🚀 本地预览

**最简单**：双击 `index.html`，用浏览器打开即可。

**推荐方式**（支持热更新，更接近线上环境）：
```bash
# 方式 1：Python（如果有）
cd bowei-website
python -m http.server 8000
# 浏览器访问 http://localhost:8000

# 方式 2：VS Code
# 安装 "Live Server" 插件，右键 index.html → Open with Live Server
```

## 🌐 免费上线（三选一）

### 方案 A：Netlify（最简单，推荐 ⭐）

**适合人群**：零技术基础，5 分钟搞定

1. 打开 https://app.netlify.com/drop
2. 把整个 `bowei-website` 文件夹**拖进网页**
3. 完成！你会得到一个网址，如 `https://bowei-xxxx.netlify.app`
4. （可选）在 Site Settings → Change site name，改成好记的，如 `bowei`

**优点**：零配置、支持表单、免费 SSL、自动 HTTPS

---

### 方案 B：Cloudflare Pages

1. 注册 Cloudflare 账号 → https://dash.cloudflare.com
2. 进入 Workers & Pages → Create application → Pages → Upload assets
3. 上传 `bowei-website` 文件夹
4. 得到 `https://bowei.pages.dev` 网址

**优点**：全球 CDN、访问速度极快、无限流量

---

### 方案 C：GitHub Pages

1. 注册 GitHub 账号 → New repository
2. 上传 `bowei-website` 所有文件
3. Settings → Pages → Source: main branch → Save
4. 得到 `https://你的用户名.github.io/bowei-website`

**优点**：版本管理，方便后续修改

---

## 📎 绑定自有域名（如 bowei.com）

以 Netlify 为例（其他平台类似）：

### 第 1 步：添加自定义域名
1. 进入 Netlify 站点 → Domain settings → Add a domain
2. 输入你的域名（如 `www.bowei.com`），点击 Verify → Add
3. （可选）同时添加裸域 `bowei.com`，并设置跳转到 `www.bowei.com`

### 第 2 步：修改 DNS 解析（在域名注册商后台操作）

在你的域名注册商（阿里云/腾讯云/GoDaddy 等）的 DNS 管理页面，添加以下记录：

**方式一：A 记录 + CNAME（通用）**
| 类型 | 主机记录 | 记录值 |
|------|---------|--------|
| A | @ | 75.2.60.5（Netlify 负载均衡 IP） |
| CNAME | www | 你的站点名.netlify.app |

**方式二：直接用 Netlify DNS（更快）**
将域名的 Name Server 改为 Netlify 提供的地址，DNS 解析自动配置。

### 第 3 步：等待生效
- DNS 生效通常需要 10 分钟～24 小时
- Netlify 会自动签发免费 SSL 证书（HTTPS）
- 生效后访问 `https://www.bowei.com` 即可看到网站

> 💡 **各平台 DNS 指向地址不同**，部署后在对应平台的"自定义域名"页面会显示具体记录值，照抄即可。

---

## ✉️ 表单功能配置

联系页表单默认走 `mailto:`（打开邮件客户端）。如需真正的在线提交：

### 接入 Formspree（免费 50 封/月）
1. 注册 https://formspree.io
2. New Form → 复制 Endpoint（形如 `https://formspree.io/f/abcdwxyz`）
3. 编辑 `contact.html`（和 `en/contact.html`），找到 `<form id="contact-form">`
4. 添加 `action` 属性：
   ```html
   <form id="contact-form" action="https://formspree.io/f/你的ID" method="POST">
   ```
5. 客户提交后，你的邮箱会收到邮件

---

## 🛠️ 常见修改

| 我想改… | 修改文件 |
|--------|---------|
| LOGO | 替换 `assets/logo.png`（建议透明背景 PNG，宽 200-400px） |
| 配色 | `css/style.css` 顶部 `:root` 的 `--c-primary` 等变量 |
| 联系方式 | 全局搜索"15256096370"替换（所有页面都有） |
| 公司简介 | `about.html`、`index.html` |
| 产品信息 | `products.html` |
| 新增产品图 | 放到 `assets/cases/`，在 `products.html` 引用 |
| 页脚版权年份 | 自动取当前年份，无需手动改 |

---

## 📊 技术特点

- ✅ **零依赖**：纯 HTML/CSS/JS，不依赖任何框架
- ✅ **SEO 友好**：每个页面都有独立的 title/description/keywords
- ✅ **移动端适配**：响应式设计，手机访问体验佳
- ✅ **加载快**：无外部库，图片本地化
- ✅ **易维护**：结构清晰，普通文员也能改文字

---

## 📞 联系方式

- **公司**：安徽柏威工业技术有限公司
- **地址**：合肥市包河区繁华大道联东U谷二期12栋102号
- **电话**：15256096370（陈经理）
- **联系人**：陈迟迟

---

© 2026 安徽柏威工业技术有限公司 · Anhui Bowei Industrial Technology Co., Ltd.
