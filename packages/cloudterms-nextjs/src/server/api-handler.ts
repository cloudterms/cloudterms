import { CloudTerms } from '@cloudterms/react/server'
import { type NextRequest, NextResponse } from 'next/server'

type Context = {
  params: {
    cloudterms: string[]
  }
}

export const CloudTermsHandler = () => {
  const cloudterms = CloudTerms()

  return {
    GET: async (_req: NextRequest, { params }: Context) => {
      if (params.cloudterms[0] === 'terms') {
        const terms = await cloudterms.terms.get()
        return NextResponse.json({ terms })
      }

      if (
        params.cloudterms[0] === 'users' &&
        params.cloudterms[2] === 'has-agreed'
      ) {
        const hasAgreed = await cloudterms.user.hasAgreed(params.cloudterms[1])
        return NextResponse.json({ hasAgreed })
      }

      return NextResponse.json(
        { error: 'CloudTerms route not found' },
        { status: 404 },
      )
    },

    POST: async (_req: NextRequest, { params }: Context) => {
      if (
        params.cloudterms[0] === 'users' &&
        params.cloudterms[2] === 'agree'
      ) {
        const setAgreed = await cloudterms.user.setAgreed(params.cloudterms[1])
        return NextResponse.json({ setAgreed })
      }

      return NextResponse.json(
        { error: 'CloudTerms route not found' },
        { status: 404 },
      )
    },
  }
}
