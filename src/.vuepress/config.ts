/*
 * @Description: file content
 * @Author: fkxm
 * @Date: 2023-06-27 17:14:21
 * @LastEditors: fkxm
 * @LastEditTime: 2023-06-27 17:59:18
 * @FilePath: \fkxm.github.io\fkxm.github.io\src\.vuepress\config.ts
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "方块熊猫的笔记",
  description: "方块熊猫的笔记",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  
});
