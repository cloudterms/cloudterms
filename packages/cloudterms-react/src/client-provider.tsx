"use client";
import React from "react";

import CloudTerms from "@cloudterms/js";

export type Terms = Awaited<
  ReturnType<ReturnType<typeof CloudTerms>["terms"]["get"]>
>;

export const CloudTermsClientProvider = ({
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
  onAgree?: () => void;
}) => {
  return <>{children}</>;
};
