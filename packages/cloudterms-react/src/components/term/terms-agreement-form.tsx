import { TermContentDialog } from '@/src/components/term/term-content-dialog'
import { Button } from '@/src/components/ui/button'
import { Checkbox } from '@/src/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/form'
import type { Term, Terms } from '@cloudterms/js'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const TermItemSchema = z.object({
  termId: z.string(),
  hasChecked: z.boolean(),
})

type TermItem = z.infer<typeof TermItemSchema>

const FormSchema = z.object({
  terms: z
    .array(TermItemSchema)
    .refine(value => value.every(item => !!item.hasChecked), {
      message: 'You must accept all terms to continue.',
    }),
})

export function TermsAgreementForm({
  terms,
  onAgree,
}: {
  terms: Terms
  onAgree: () => void
}) {
  const [selectedTerm, setSelectedTerm] = useState<Term>()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      terms: terms.map(item => ({ termId: item.termId, hasChecked: false })),
    },
  })

  function onSubmit(_data: z.infer<typeof FormSchema>) {
    onAgree()
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="terms"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-zinc-900 text-xl">
                    Agreements
                  </FormLabel>
                  <FormDescription>
                    Select the terms you want to accept.
                  </FormDescription>
                </div>
                {terms.map((term: Term) => (
                  <FormField
                    key={term.termId}
                    control={form.control}
                    name="terms"
                    render={({ field }) => {
                      return (
                        <div className="flex flex-row items-center space-x-3 mt-3">
                          <FormItem key={term.termId}>
                            <FormControl>
                              <Checkbox
                                checked={
                                  field.value.find(
                                    (item: TermItem) =>
                                      item.termId === term.termId,
                                  )?.hasChecked ?? false
                                }
                                onCheckedChange={checked =>
                                  field.onChange(
                                    field.value.map((item: TermItem) =>
                                      item.termId === term.termId
                                        ? { ...item, hasChecked: checked }
                                        : item,
                                    ),
                                  )
                                }
                              />
                            </FormControl>
                          </FormItem>
                          <FormLabel className="font-normal">
                            <span className="text-zinc-900">Accept </span>
                            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                            <span
                              className="cursor-pointer text-blue-500 hover:text-blue-700 font-bold"
                              onClick={e => {
                                e.stopPropagation()
                                setSelectedTerm(term)
                              }}
                            >
                              {term.name}
                            </span>
                          </FormLabel>
                        </div>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Agree</Button>
        </form>
      </Form>
      {selectedTerm && (
        <TermContentDialog
          term={selectedTerm}
          reset={() => setSelectedTerm(undefined)}
        />
      )}
    </>
  )
}
