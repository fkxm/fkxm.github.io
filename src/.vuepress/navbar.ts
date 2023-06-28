/*
 * @Description: 导航栏
 * @Author: fkxm
 * @Date: 2023-06-27 17:14:21
 * @LastEditors: fkxm
 * @LastEditTime: 2023-06-28 17:42:05
 * @FilePath: \fkxm.github.io\src\.vuepress\navbar.ts
 */
import { navbar } from 'vuepress-theme-hope'

export default navbar([
  '/',
  '/blog/',
  {
    text: '后端',
    activeMatch: '^/back-end/$',
    // icon: 'note',
    link: '/back-end/',
  },
  {
    text: '前端',
    activeMatch: '^/front-end/$',
    link: '/front-end/',
  },
  {
    text: '时间轴',
    activeMatch: '^/timeline/$',
    link: '/timeline/',
  },
  //   {
  //     text: '博文',
  //     icon: 'pen-to-square',
  //     prefix: '/posts/',
  //     children: [
  //       {
  //         text: '苹果',
  //         icon: 'pen-to-square',
  //         prefix: 'apple/',
  //         children: [
  //           { text: '苹果1', icon: 'pen-to-square', link: '1' },
  //           { text: '苹果2', icon: 'pen-to-square', link: '2' },
  //           '3',
  //           '4',
  //         ],
  //       },
  //       {
  //         text: '香蕉',
  //         icon: 'pen-to-square',
  //         prefix: 'banana/',
  //         children: [
  //           {
  //             text: '香蕉 1',
  //             icon: 'pen-to-square',
  //             link: '1',
  //           },
  //           {
  //             text: '香蕉 2',
  //             icon: 'pen-to-square',
  //             link: '2',
  //           },
  //           '3',
  //           '4',
  //         ],
  //       },
  //       { text: '樱桃', icon: 'pen-to-square', link: 'cherry' },
  //       { text: '火龙果', icon: 'pen-to-square', link: 'dragonfruit' },
  //       'tomato',
  //       'strawberry',
  //     ],
  //   },
  {
    text: 'V2 文档',
    icon: 'book',
    link: 'https://theme-hope.vuejs.press/zh/',
  },
])
