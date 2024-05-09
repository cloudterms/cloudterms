import React, { useCallback } from 'react'
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

  const handleAgree = useCallback(() => {
    onAgree()
      .then(success => _setHasAgreed(success))
      .catch(() => _setHasAgreed(false))
  }, [onAgree])

  return (
    <>
      <TermsDialog
        className="relative z-10"
        onAgree={handleAgree}
        isOpen={!Boolean(hasAgreed) && !_hasAgreed}
        terms={terms}
      />
      {children}
    </>
  )
}
