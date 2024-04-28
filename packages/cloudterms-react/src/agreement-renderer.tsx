import "./agreement-renderer.css";

export const AgreementRenderer = ({ agreement }: { agreement: string }) => (
  <div
    id="agreement-renderer"
    dangerouslySetInnerHTML={{ __html: agreement }}
  />
);
