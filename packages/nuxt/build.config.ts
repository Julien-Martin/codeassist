import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  emitCJS: false,
  cjsBridge: true,
  entries: ['src/module', 'src/templates/plugin'],
  externals: ['@nuxt/kit-edge', '@nuxt/types'],
})