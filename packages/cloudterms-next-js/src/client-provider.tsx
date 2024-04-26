"use client";
import React from "react";
import type { Terms } from "./types";

export const CloudTermsClientProvider = ({
  children,
  userId,
  terms,
  hasAgreed,
}: {
  children: React.ReactNode;
  userId?: string;
  terms?: Terms;
  hasAgreed?: boolean;
}) => {
  return <>{children}</>;
};
