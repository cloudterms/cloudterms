import { CloudTerms } from '@cloudterms/js'

const cloudterms = CloudTerms()
const terms = await cloudterms.terms.get()
console.log('terms', terms)

const hasAgreed = await cloudterms.user.hasAgreed('some-unique-user-id')
console.log('hasAgreed', hasAgreed)

const setAgreed = await cloudterms.user.setAgreed('some-unique-user-id')
console.log('setAgreed', setAgreed)

const hasAgreed2 = await cloudterms.user.hasAgreed('some-unique-user-id')
console.log('hasAgreed', hasAgreed2)
