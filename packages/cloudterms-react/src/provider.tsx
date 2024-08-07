import type { Terms } from '@cloudterms/js'
import React, { useCallback } from 'react'
import { TermsDialog } from './terms-dialog'

export const CloudTermsClientProvider = ({
  children,
  // userId,
  terms,
  hasAgreed = true,
  onAgree,
}: {
  children: React.ReactNode
  userId?: string | null
  terms?: Terms
  hasAgreed: boolean
  onAgree: () => Promise<boolean>
}) => {
  const [_hasAgreed, _setHasAgreed] = React.useState<boolean>()

  const handleAgree = useCallback(() => {
    onAgree()
      .then(success => _setHasAgreed(success))
      .catch(() => _setHasAgreed(false))
  }, [onAgree])

  return (
    <>
      {hasAgreed === false && terms?.length && (
        <TermsDialog
          className="relative z-10"
          onAgree={handleAgree}
          isOpen={!hasAgreed && !_hasAgreed}
          terms={terms}
        />
      )}
      {children}
    </>
  )
}
