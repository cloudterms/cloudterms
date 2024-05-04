import { useEffect, useRef } from 'react'
import type { Terms } from '@cloudterms/js'

import { HTMLRenderer } from './html-renderer'

export const TermsModal = ({
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
    <dialog ref={ref} {...props}>
      <h2>Application agreements</h2>
      {terms.map(term => {
        return (
          <div key={term.termId}>
            <HTMLRenderer termContent={term.content} />
          </div>
        )
      })}
      <button onClick={onAgree}>agree</button>
    </dialog>
  )
}
