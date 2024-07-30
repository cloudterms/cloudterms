export const HTMLRenderer = ({ termContent }: { termContent: string }) => (
  // biome-ignore lint/security/noDangerouslySetInnerHtml: CloudTerms API returns HTML content
  <div id="html-renderer" dangerouslySetInnerHTML={{ __html: termContent }} />
)
