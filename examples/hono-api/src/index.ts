import { CloudTerms } from '@cloudterms/js'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

const cloudterms = CloudTerms()

app.use('/*', cors())

// Route to pull your applications terms from CloudTerms
app.get('/terms', async c => {
  const terms = await cloudterms.terms.get()
  return c.json({ terms })
})

// Route to check if a user has agreed to your terms
app.get('/users/:userId/has-agreed', async c => {
  const hasAgreed = await cloudterms.user.hasAgreed(c.req.param('userId'))
  return c.json({ hasAgreed })
})

// Route to set a user as agreed to your terms
app.post('/users/:userId/agree', async c => {
  const setAgreed = await cloudterms.user.setAgreed(c.req.param('userId'))
  return c.json({ setAgreed })
})

const port = Number(process.env.PORT) ?? 3002

serve({
  fetch: app.fetch,
  port,
})
console.log(`Server is running on port ${port}`)
