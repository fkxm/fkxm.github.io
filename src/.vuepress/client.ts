/*
 * @Description:
 * @Author: fkxm
 * @Date: 2023-06-28 17:09:30
 * @LastEditors: fkxm
 * @LastEditTime: 2023-06-28 17:38:04
 * @FilePath: \fkxm.github.io\src\.vuepress\client.ts
 */
// .vuepress/client.ts
import { defineClientConfig } from '@vuepress/client'
import { setupRunningTimeFooter } from 'vuepress-theme-hope/presets/footerRunningTime.js'
import 'vuepress-theme-hope/presets/left-blog-info.scss'
import 'vuepress-theme-hope/presets/shinning-feature-panel.scss'
import 'vuepress-theme-hope/presets/bounce-icon.scss'

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date('2022-01-01'),
      {
        '/': '已运行 :day 天 :hour 小时 :minute 分钟 :second 秒',
        // '/': 'Running time: :day days :hour hours :minute minutes :second seconds',
        '/zh/': '已运行 :day 天 :hour 小时 :minute 分钟 :second 秒',
      },
      true,
    )
  },
})
