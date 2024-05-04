import React from 'react'
import CloudTerms from '@cloudterms/js'
import { CloudTermsClientProvider } from '@cloudterms/react'

export const CloudTermsProvider = async ({
  children,
  userId,
}: {
  children: React.ReactNode
  userId?: string
}) => {
  const cloudterms = CloudTerms()
  const terms = await cloudterms.terms.get()
  const hasAgreed = await (userId
    ? cloudterms.user.hasAgreed(userId)
    : Promise.resolve(false))

  const onAgree = () => {
    console.log('agreeing...')
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
