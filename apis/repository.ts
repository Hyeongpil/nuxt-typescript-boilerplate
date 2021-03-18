import { NuxtAxiosInstance } from '@nuxtjs/axios'
import ProjectRepository from '~/apis/ProjectRepository'
import FileRepository from '~/apis/FileRepository'
import CompanyRepository from '~/apis/CompanyRepository'
import AdminRepository from '~/apis/AdminRepository'

export default ($axios: NuxtAxiosInstance) => ({
  project: new ProjectRepository($axios),
  file: new FileRepository($axios),
  company: new CompanyRepository($axios),
  admin: new AdminRepository($axios)
})

export interface IRepositorys {
  project: ProjectRepository
  file: FileRepository
  company: CompanyRepository
  admin: AdminRepository
}
