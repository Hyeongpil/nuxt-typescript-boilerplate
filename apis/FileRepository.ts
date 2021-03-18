import { NuxtAxiosInstance } from '@nuxtjs/axios'
export default class FileRepository {
  private $axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }

  public companyFiles(data: any) {
    return this.$axios.post('/companies-by-file', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  }
}
