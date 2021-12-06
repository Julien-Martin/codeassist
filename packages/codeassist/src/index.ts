import { setupDevtoolsPlugin, App as DevtoolApp } from '@vue/devtools-api'
import { App, markRaw, isVue2, Plugin } from 'vue-demi'
import { IS_CLIENT } from './env'

const INSPECTOR_ID = 'codeassist'
const DEVTOOLS_NAME = 'Codeassist 💻'

export const CodeassistVuePlugin: Plugin = function (_Vue) {
  _Vue.mixin({
    beforeCreate() {
      const app = this as any
      if (IS_CLIENT && __DEV__) {
        setupDevtools(app)
      }
    }
  })
}

export function setupDevtools (app: DevtoolApp) {
  setupDevtoolsPlugin({
    id: 'codeassist',
    label: DEVTOOLS_NAME,
    packageName: 'codeassist',
    homepage: 'https://github.com/Julien-Martin/codeassist',
    app
  }, (api) => {
    api.addInspector({
      id: INSPECTOR_ID,
      label: DEVTOOLS_NAME,
      icon: 'bug_report'
    })

    api.on.visitComponentTree((payload, context) => {
      // const node = payload.treeNode
      console.log(payload.componentInstance)
    })

    api.on.inspectComponent((payload, context) => {
      console.log('payload', payload)
      console.log('context', context)
    })
  })
}

export function createCodeassist() {
  const codeassist = markRaw({
    install(app: App) {
      if (!isVue2) {
        if(__DEV__) {
          // @ts-expect-error: weird type in devtools api
          setupDevtools(app)
        }
      }
    }
  })
  return codeassist
}