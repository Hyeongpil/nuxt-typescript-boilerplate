import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ISignInUp } from '~/types/admin.interface'

export default class AdminRepository {
  private $axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }

  public signUp(payload: ISignInUp) {
    return this.$axios.post('sign-up', payload)
  }

  public signIn(payload: ISignInUp) {
    return this.$axios.post('sign-in', payload)
  }

  public me() {
    return this.$axios.get('v1/user/me')
  }
}
