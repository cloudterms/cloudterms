import { useEffect, useRef } from 'react'
import type { Terms } from '@cloudterms/js'

import { Button } from './components/ui/button'
import { HTMLRenderer } from './html-renderer'

export const TermsDialog = ({
  isOpen,
  terms,
  onAgree,
  ...props
}: {
  isOpen: boolean
  terms: Terms
  onAgree: () => void
} & React.HTMLProps<HTMLDialogElement>) => {
  const ref = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal()
    } else {
      ref.current?.close()
    }
  }, [isOpen])

  return (
    <dialog className="bg-red-500" ref={ref} {...props}>
      <h2>Application agreements</h2>
      {terms.map(term => {
        return (
          <div key={term.termId}>
            <HTMLRenderer termContent={term.name} />
          </div>
        )
      })}
      <Button onClick={onAgree}>agree</Button>
    </dialog>
  )
}
