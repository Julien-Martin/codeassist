import { install, isVue2 } from 'vue-demi'
import type { Plugin } from '@nuxt/types'
import { createCodeassist } from 'codeassist'

if (isVue2) {
  install()
}

const CodeassistNuxtPlugin: Plugin = (context) => {
  const codeasssit = createCodeassist()
  if (isVue2) {
    context.app.codeassist = codeasssit
  } else {
    // @ts-expect-error: vue 3 only
    context.vueApp.use(codeasssit)
  }
}

export default CodeassistNuxtPlugin