import React from 'react'
import type { Terms } from '@cloudterms/js'

import { TermsModal } from './terms-modal'

export const CloudTermsClientProvider = ({
  children,
  // userId,
  terms,
  hasAgreed,
  onAgree,
}: {
  children: React.ReactNode
  userId?: string
  terms?: Terms
  hasAgreed?: boolean
  onAgree: () => void
}) => {
  if (hasAgreed === true || !terms) return children

  return (
    <>
      <TermsModal
        className="relative z-10"
        onAgree={onAgree}
        isOpen={!Boolean(hasAgreed)}
        terms={terms}
      />
      {children}
    </>
  )
}
