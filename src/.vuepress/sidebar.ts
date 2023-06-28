/*
 * @Description:
 * @Author: fkxm
 * @Date: 2023-06-27 17:14:21
 * @LastEditors: fkxm
 * @LastEditTime: 2023-06-28 15:37:50
 * @FilePath: \fkxm.github.io\src\.vuepress\sidebar.ts
 */
import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/back-end/': 'structure',
  '/front-end/': 'structure',

  '/': [
    '',
    {
      text: '如何使用',
      icon: 'laptop-code',
      prefix: 'blog/',
      link: 'blog/',
      children: 'structure',
    },
    {
      text: '文章',
      icon: 'book',
      prefix: 'posts/',
      children: 'structure',
    },
    'intro',
    'slides',
  ],
})
