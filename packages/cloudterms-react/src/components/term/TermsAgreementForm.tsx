import { useState } from 'react'
import type { Term, Terms } from '@cloudterms/js'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { TermContentDialog } from '@/src/components/term/TermContentDialog'
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

type TermWithHasChecked = Term & { hasChecked: boolean }

const TermSchema = z.object({
  applicationId: z.string(),
  id: z.number(),
  name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.string(),
  orgId: z.string().nullable(),
  termId: z.string(),
  content: z.string(),
  hasChecked: z.boolean(),
})

const FormSchema = z.object({
  terms: z
    .array(TermSchema)
    .refine(
      (value: TermWithHasChecked[]) => value.every(item => !!item.hasChecked),
      {
        message: 'You must accept all terms to continue.',
      }
    ),
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
      terms: terms.map(item => ({ ...item, hasChecked: false })),
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
                  <FormLabel className="text-base">Terms of Service</FormLabel>
                  <FormDescription>
                    Select the terms you want to accept.
                  </FormDescription>
                </div>
                {terms.map((term: Term) => (
                  <FormField
                    key={term.id}
                    control={form.control}
                    name="terms"
                    render={({ field }) => {
                      return (
                        <div className="flex flex-row terms-start space-x-3 mt-3">
                          <FormItem key={term.id}>
                            <FormControl>
                              <Checkbox
                                checked={
                                  !!field.value?.find(
                                    (item: TermWithHasChecked) =>
                                      item.id === term.id
                                  ).hasChecked
                                }
                                onCheckedChange={checked =>
                                  field.onChange(
                                    field.value.map(
                                      (item: TermWithHasChecked) =>
                                        item.id === term.id
                                          ? { ...item, hasChecked: checked }
                                          : item
                                    )
                                  )
                                }
                              />
                            </FormControl>
                          </FormItem>
                          <FormLabel className="font-normal">
                            Accept{' '}
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
