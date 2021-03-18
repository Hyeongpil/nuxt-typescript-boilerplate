/* eslint-disable camelcase */
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'adminModule',
  stateFactory: true,
  namespaced: true
})
export default class AdminModule extends VuexModule {
  /**
   * STATE
   */
  public accessToken: string = ''

  @Mutation
  public SET_ACCESS_TOKEN(accessToken: string) {
    this.accessToken = accessToken
  }

  @Mutation
  public INIT() {
    this.accessToken = ''
  }
}
