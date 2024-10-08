import type { AgreedRes, FullCloudTermsConfig, Terms, UserId } from './types'
import { getBaseUrl } from './utils'

const BASE_URL = getBaseUrl()

const request = (
  config: FullCloudTermsConfig,
  path: string,
  requestOptions: RequestInit = {},
) => {
  const basicAuthStr = `${config.appId}:${config.secret}`
  const base64AuthStr = Buffer.from(basicAuthStr).toString('base64')
  const authHeaderValue = `Basic ${base64AuthStr}`

  const headers = new Headers()
  headers.append('Authorization', authHeaderValue)

  const defaultRequestOptions: RequestInit = {
    method: 'GET',
    headers,
    redirect: 'follow',
    cache: 'no-store',
  }

  const _requestOptions: RequestInit = {
    ...defaultRequestOptions,
    ...requestOptions,
  }

  return fetch(`${BASE_URL}${path}`, _requestOptions)
}

export async function termsGet(config: FullCloudTermsConfig): Promise<Terms> {
  const res = await request(config, '/terms')
  const json = (await res.json()) as { data: Terms }
  return json.data
}

export async function userSetAgreed(
  config: FullCloudTermsConfig,
  userId: UserId,
): Promise<AgreedRes> {
  const res = await request(config, `/users/${userId}/agree`, {
    method: 'POST',
  })
  const json = (await res.json()) as { data: AgreedRes }
  return json.data
}

export async function userHasAgreed(
  config: FullCloudTermsConfig,
  userId: UserId,
): Promise<boolean> {
  const res = await request(config, `/users/${userId}/has-agreed`)
  const json = (await res.json()) as { data: boolean }
  return json.data
}
