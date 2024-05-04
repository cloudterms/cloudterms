export const HTMLRenderer = ({ termContent }: { termContent: string }) => (
  <div id="html-renderer" dangerouslySetInnerHTML={{ __html: termContent }} />
);
