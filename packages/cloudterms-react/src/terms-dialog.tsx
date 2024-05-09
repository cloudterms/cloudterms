import { memo } from 'react';
import type { Terms } from '@cloudterms/js'

import { TermsAgreementForm } from '@/src/components/term/TermsAgreementForm'

export const TermsDialog = memo(({
  isOpen,
  terms,
  onAgree,
  ...props
}: {
  isOpen: boolean
  terms?: Terms
  onAgree: () => void
} & React.HTMLProps<HTMLDialogElement>) => {
  if (!terms || !isOpen) return <></>

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="fixed left-[50%] top-[50%] z-51 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
        <TermsAgreementForm onAgree={onAgree} terms={terms} />
      </div>
    </div>
  )
})
