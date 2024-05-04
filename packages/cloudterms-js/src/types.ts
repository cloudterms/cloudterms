export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Maybe<T> = T | null | undefined

export type CloudTermsConfig = {
  appId?: string
  secret?: string
}

export type FullCloudTermsConfig = {
  appId: string
  secret: string
}

export type UserId = string

export type Term = {
  applicationId: string
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
  userId: string
  orgId: string | null
  termId: string
  content: string
}

export type Terms = Term[]

export type AgreedRes = {
  externalUserId: string
  applicationId: string
  createdAt: Date
  updatedAt: Date
  lastAgreed: Date
}
