import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    // 模組的名稱，通常也會對應 NPM 發布的套件名稱
    name: '@nuxtjs/example',
    // 如果有配置這個模組的一些選項，會將其保存在這個設定鍵值下
    configKey: 'sample',
    // 相容性限制 `nuxt.config`
    compatibility: {
      // 為了控制模組的版本相容性，通常會在這裡配置 Nuxt 版本的需求
      nuxt: '^3.0.0',
    },
  },
  // 模組預設的選項
  defaults: {},
  hooks: {},
  async setup(_moduleOptions, _nuxt) {
    // Nuxt 啟動載入模組後，模組所執行的邏輯會在這裡實作
  },
})
