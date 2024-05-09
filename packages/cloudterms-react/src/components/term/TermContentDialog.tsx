import { useState } from 'react'
import type { Term } from '@cloudterms/js'

import { Button } from '@/src/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog'
import { HTMLRenderer } from '@/src/html-renderer'

export function TermContentDialog({
  term,
  reset,
}: {
  term: Term
  reset: () => void
}) {
  const [open, setOpen] = useState<boolean>(true)

  const closeModal = (value: boolean) => {
    if (!value) {
      reset()
    }
    setOpen(value)
  }

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{term.name}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <HTMLRenderer termContent={term.content} />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
