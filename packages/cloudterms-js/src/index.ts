import { termsGet, userHasAgreed, userSetAgreed } from './requests'
import type { CloudTermsConfig, UserId } from './types'
import { getConfig } from './utils'

function CloudTerms(config: CloudTermsConfig = {}) {
  const _config = getConfig(config)

  return {
    terms: {
      get: () => termsGet(_config),
    },
    user: {
      setAgreed: (userId: UserId) => userSetAgreed(_config, userId),
      hasAgreed: (userId: UserId) => userHasAgreed(_config, userId),
    },
  }
}

export type { AgreedRes, Term, Terms } from './types'
export { CloudTerms }
