import { TermsAgreementForm } from '@/src/components/term/terms-agreement-form'
import type { Terms } from '@cloudterms/js'
import { memo } from 'react'

export const TermsDialog = memo(function TermsDialog({
  isOpen,
  terms,
  onAgree,
}: {
  isOpen: boolean
  terms?: Terms
  onAgree: () => void
} & React.HTMLProps<HTMLDialogElement>) {
  if (!terms || !isOpen) return <></>

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="fixed left-[50%] top-[50%] z-51 grid w-full sm:max-w-[800px] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
        <TermsAgreementForm onAgree={onAgree} terms={terms} />
      </div>
    </div>
  )
})
