/**
 * @module @codeassist/nuxt
 */
// import { isVue2 } from 'vue-demi'
import type { Module } from '@nuxt/types'

export default <Module>function (_options) {
  this.addPlugin({ src: require.resolve('./plugin.mjs') })

  // transpile codeassist for nuxt 2 and nuxt bridge
  // if (isVue2 && !nuxt.options.build.transpile.includes('codeassist')) {
  //   nuxt.options.build.transpile.push('codeassist')
  // }
}