import React from "react";

import CloudTerms from "@cloudterms/js";
import { TermsModal } from "./terms-modal";

export type Terms = Awaited<
  ReturnType<ReturnType<typeof CloudTerms>["terms"]["get"]>
>;

export const CloudTermsProvider = ({
  children,
  userId,
  terms,
  hasAgreed,
  onAgree,
}: {
  children: React.ReactNode;
  userId?: string;
  terms?: Terms;
  hasAgreed?: boolean;
  onAgree: () => void;
}) => {
  if (hasAgreed || !terms) return children;

  return (
    <>
      <TermsModal
        className="relative z-10"
        onAgree={onAgree}
        isOpen={!Boolean(hasAgreed)}
        terms={terms}
      />
      {children}
    </>
  );
};
