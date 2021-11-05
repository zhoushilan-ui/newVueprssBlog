module.exports = {
  title: "蓝懒懒的博客",
  description: "",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/logo.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/newVueprssBlog/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: "前端基础", link: "/accumulate/" },
      { text: "算法题库", link: "/algorithm/" },
      { text: "微博", link: "https://baidu.com" },
    ],
    sidebar: {
      "/accumulate/": [
        "/accumulate/Webversion.html",
        "/accumulate/signature.html",
        "/accumulate/PIxijs.html",
        "/accumulate/textillatejs.html",
        "/accumulate/es6.html",
      ],
      "/mojs/": ["", "/mojs/mojs.html", "/mojs/mojsCase.html"],
      "/ES6/": ["", "/ES6/es6.html"],
      "/Webversion/": ["", "/Webversion/Webversion.html"],
      "/PIxijs/": ["", "/PIxijs/Webversion.html"],
      "/signature/": ["", "/signature/signature.html"],
      "/svg-mesh-3d/": ["", "/svg-mesh-3d/svg-mesh-3d.html"],
      "/Brokenknowledge/": ["", "/Brokenknowledge/Brokenknowledge.html"],
      "/textillatejs/": ["", "/textillatejs/textillatejs.html"],
      "/vue3-knowledge/": ["", "/vue3-knowledge/vue3-knowledge.html"],
      "/Echarts/": ["", "/Echarts/Basics.html"],
    },
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
};
