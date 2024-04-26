import React from "react";
import CloudTerms from "@cloudterms/js";
import { CloudTermsClientProvider } from "./client-provider";

export const CloudTermsProvider = async ({
  children,
  userId,
}: {
  children: React.ReactNode;
  userId?: string;
}) => {
  const cloudterms = CloudTerms();
  const terms = await cloudterms.terms.get();
  const hasAgreed = await (userId
    ? cloudterms.user.hasAgreed(userId)
    : Promise.resolve(false));

  return (
    <CloudTermsClientProvider
      userId={userId}
      terms={terms}
      hasAgreed={hasAgreed}
    >
      {children}
    </CloudTermsClientProvider>
  );
};
