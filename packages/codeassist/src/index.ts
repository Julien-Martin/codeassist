import { setupDevtoolsPlugin, App as DevtoolApp } from '@vue/devtools-api'
import { App, markRaw, isVue2 } from 'vue-demi'

export function setupDevtools (app: DevtoolApp) {
  setupDevtoolsPlugin({
    id: 'codeassist',
    label: 'Codeassist Devtools',
    packageName: 'codeassist',
    homepage: 'https://github.com/Julien-Martin/codeassist',
    app
  }, () => {})
}

export function createCodeassist() {
  return markRaw({
    install(app: App) {
      if (!isVue2) {
        if(__DEV__) {
          // @ts-expect-error: weird type in devtools api
          setupDevtools(app)
        }
      }
    }
  })
}