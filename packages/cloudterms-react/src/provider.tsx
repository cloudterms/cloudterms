import React from 'react'
import type { Terms } from '@cloudterms/js'

import { TermsDialog } from './terms-dialog'

export const CloudTermsClientProvider = ({
  children,
  // userId,
  terms,
  hasAgreed = true,
  onAgree,
}: {
  children: React.ReactNode
  userId?: string
  terms?: Terms
  hasAgreed: boolean
  onAgree: () => Promise<boolean>
}) => {
  const [_hasAgreed, _setHasAgreed] = React.useState<boolean>()
  if (hasAgreed === true || !terms) return children

  return (
    <>
      <TermsDialog
        className="relative z-10"
        onAgree={() => {
          onAgree()
            .then(success => _setHasAgreed(success))
            .catch(() => _setHasAgreed(false))
        }}
        isOpen={!Boolean(hasAgreed) && !_hasAgreed}
        terms={terms}
      />
      {children}
    </>
  )
}
