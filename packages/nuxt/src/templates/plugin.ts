import { install, isVue2 } from 'vue-demi'
import type { Plugin } from '@nuxt/types'

if (isVue2) {
  install()
}

const CodeassistNuxtPlugin: Plugin = () => {}

export default CodeassistNuxtPlugin