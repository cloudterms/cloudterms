import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <span style={{ color: '#334155', fontSize: '24px' }}>
        Cloud<span style={{ color: '#7C3AED' }}>Terms</span> Docs
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/cloudterms/cloudterms',
  },
  chat: {
    link: 'https://discord.gg/XGK3cmEY2A',
  },
  docsRepositoryBase: 'https://github.com/cloudterms/cloudterms',
  footer: {
    text: 'CloudTerms Docs',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – CloudTerms',
    }
  },
}

export default config
