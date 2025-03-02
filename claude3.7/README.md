# React 博客单页应用

这是一个使用React框架开发的博客单页应用，包含四个页面：首页、书籍、关于我们和联系我们。通过React Router实现页面间的无刷新切换，确保切换过程流畅且用户体验良好。

## 功能特点

- 响应式设计，适配各种屏幕尺寸
- 流畅的页面过渡效果
- 交互式导航菜单
- 书籍页面的搜索和分类筛选功能
- 联系表单与表单验证
- 现代化的UI设计

## 技术栈

- React 18
- React Router v6
- CSS3 (包含Flexbox和Grid布局)
- 响应式设计

## 项目结构

```
react-blog-spa/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Books.js
│   │   ├── Books.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 安装与运行

1. 克隆项目到本地

```bash
git clone https://github.com/yourusername/react-blog-spa.git
cd react-blog-spa
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm start
```

4. 打开浏览器访问 http://localhost:3000

## 构建生产版本

```bash
npm run build
```

构建后的文件将位于 `build` 目录中，可以部署到任何静态文件服务器。

## 页面说明

### 首页

展示博客的主要内容，包括精选文章和订阅区域。

### 书籍

展示推荐书籍列表，支持按类别筛选和搜索功能。

### 关于我们

介绍博客的使命、团队成员和发展历程。

### 联系我们

提供联系方式、联系表单和常见问题解答。

## 自定义

您可以通过修改CSS文件来自定义应用的外观，或者通过编辑相应的JS文件来添加新功能或修改现有功能。

## 许可证

MIT