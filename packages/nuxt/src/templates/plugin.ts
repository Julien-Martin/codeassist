import { install, isVue2, Vue2 } from 'vue-demi'
import type { Plugin } from '@nuxt/types'
import { CodeassistVuePlugin, createCodeassist } from 'codeassist'

if (isVue2) {
  install()
  // @ts-expect-error: weird error
  const Vue = 'default' in Vue2 ? Vue2.default : Vue2
  Vue.use(CodeassistVuePlugin)
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