import ReactHtmlParser from "react-html-parser";

export const AgreementRenderer = ({ agreement }: { agreement: string }) => {
  return <div>{ReactHtmlParser(agreement)}</div>;
};
