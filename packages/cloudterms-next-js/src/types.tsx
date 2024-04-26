import CloudTerms from "@cloudterms/js";

export type Terms = Awaited<
  ReturnType<ReturnType<typeof CloudTerms>["terms"]["get"]>
>;
