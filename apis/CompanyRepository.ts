import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ICompany } from '~/types/company.interface'
export default class CompanyRepository {
  private $axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }

  public getCompanies() {
    return this.$axios.get('companies?page=0&size=10')
  }

  public getFailCompanies() {
    return this.$axios.get('fail-register-companies?page=0&size=10')
  }

  public setCompany(payload: ICompany): Promise<any> {
    return this.$axios.post('companies', payload)
  }

  public delCompany(id: string): Promise<any> {
    return this.$axios.delete(`companies/${id}`)
  }

  public delFailRegisterCompanies(id: string): Promise<any> {
    return this.$axios.delete(`fail-register-companies/${id}`)
  }
}
