import axios from 'axios'

import type { AxiosResponse } from 'axios'

const BASE_URL = 'https://api.github.com/repos/facebook/react'

const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json'
  }
})

const getResult = <T>(response: AxiosResponse<T>): T => response.data

export const http = {
  get: <Request = unknown, Response = unknown>(
    url: string,
    params?: Request
  ): Promise<Response> =>
    Axios.get<Response, AxiosResponse<Response>, Request>(url, {
      params
    }).then(getResult)
}
