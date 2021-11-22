/**
 * @module @codeassist/nuxt
 */
import { isVue2 } from 'vue-demi'
import type { Module } from '@nuxt/types'

export default <Module>function (_options) {
  const nuxt = this.nuxt

  // make sure we use the mjs for codeassist so node doesn't complain about using a module js with an extension that is js
  // but doesn't have the type: module in its packages.json file
  nuxt.options.alias.codeassist = 'codeassist/dist/codeassist.mjs'
  
  this.addPlugin({ 
    src: require.resolve('./plugin.mjs'),
    fileName: 'codeassist.js' 
  })

  // transpile codeassist for nuxt 2 and nuxt bridge
  if (isVue2 && !nuxt.options.build.transpile.includes('codeassist')) {
    nuxt.options.build.transpile.push('codeassist')
  }
}