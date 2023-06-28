/*
 * @Description: file content
 * @Author: fkxm
 * @Date: 2023-06-27 17:14:21
 * @LastEditors: fkxm
 * @LastEditTime: 2023-06-28 16:03:52
 * @FilePath: \fkxm.github.io\src\.vuepress\config.ts
 */
import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { searchProPlugin } from 'vuepress-plugin-search-pro'

export default defineUserConfig({
  port: 80,
  base: '/',

  lang: 'zh-CN',
  title: '方块熊猫的笔记',
  description: '方块熊猫的笔记',
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      //搜索热键，设置为空数组即可禁用
      hotKeys: [],
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: '分类：$content',
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: '标签：$content',
        },
      ],
    }),
  ],
})
