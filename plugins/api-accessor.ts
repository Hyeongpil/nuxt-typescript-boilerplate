/* eslint-disable import/no-mutable-exports */
import { Plugin, Context } from '@nuxt/types'
import createRepository, { IRepositorys } from '~/apis/repository'

let repositories: any

declare module 'vue/types/vue' {
  interface Vue {
    $repositories: IRepositorys
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $repositories: IRepositorys
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $repositories: IRepositorys
  }
}

const repositoryPlugin: Plugin = (ctx: Context, inject) => {
  inject('repositories', createRepository(ctx.$axios))
  repositories = createRepository(ctx.$axios)
}

export default repositoryPlugin

export { repositories }
