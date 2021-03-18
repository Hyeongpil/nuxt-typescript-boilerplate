import { Middleware, Context } from '@nuxt/types'
import { adminStore } from '~/store'

// my 밑의 페이지에서 사용
const isLogin: Middleware = (ctx: Context) => {
  // ctx.app.$repositories.admin.me().then((res) => {
  //   console.log('res :', res)
  // })
  // if (adminStore.accessToken === '') {
  //   return ctx.redirect('/admin/sign-in', { to: ctx.route.fullPath })
  // }
  //   console.log('adminStore.accessToken :', adminStore.accessToken)
  //   await ctx.app.$repositories.user
  //     .fetch()
  //     // .then((res) => {})
  //     .catch((err) => {
  //       console.log('isLogin err :', err) // 인증 안됨 시 로그인 페이지로 이동
  //     })
}

export default isLogin
