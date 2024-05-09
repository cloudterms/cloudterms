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
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/cloudterms/cloudterms/apps/docs',
  footer: {
    text: 'CloudTerms Docs',
  },
}

export default config
