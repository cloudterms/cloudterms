'use client'

import { CloudTermsClientProvider, type Terms } from '@cloudterms/react'
import '@cloudterms/react/index.css'

export const CloudTermsNextClientProvider = ({
  userId,
  terms,
  hasAgreed = true,
  children,
}: {
  userId?: string | null
  terms?: Terms
  hasAgreed: boolean
  children: React.ReactNode
}) => {
  const onAgree = async () => {
    try {
      await fetch(`/api/cloudterms/users/${userId}/agree`, { method: 'POST' })
      return true
    } catch (error) {
      console.error('Failed to agree', error)
      return false
    }
  }

  return (
    <CloudTermsClientProvider
      userId={userId}
      terms={terms}
      hasAgreed={hasAgreed}
      onAgree={onAgree}
    >
      {children}
    </CloudTermsClientProvider>
  )
}
