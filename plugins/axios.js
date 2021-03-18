/* eslint-disable no-console */

import https from 'https'
import { adminStore } from '~/store'

export default (ctx) => {
  ctx.$axios.defaults.baseURL = process.env.BASE_URL

  //  개발기일 때 SSL 이슈 해결 방안
  ctx.$axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false
  })

  //  request에서 기본적으로 로그 찍도록 설정
  ctx.$axios.onRequest((config) => {
    if (adminStore.accessToken)
      config.headers.Authorization = `Bearer ${adminStore.accessToken}`
  })

  // ctx.$axios.onResponse(async (response) => {
  //    // 공통 리스폰스 처리
  //    // store 저장, 토큰 갱신 등 await에서 처리

  //   return response
  // })

  // 에러 공통 처리
  ctx.$axios.onError((error, redirect) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
