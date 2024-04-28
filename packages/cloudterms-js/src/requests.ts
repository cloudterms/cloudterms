import type { FullCloudTermsConfig, UserId } from "./types";
import { getBaseUrl } from "./utils";

const BASE_URL = getBaseUrl();

const request = (
  config: FullCloudTermsConfig,
  path: string,
  requestOptions: RequestInit = {}
) => {
  const authRaw = `${config.appId}:${config.secret}`;

  const headers = new Headers();
  headers.append(
    "Authorization",
    `Basic ${Buffer.from(authRaw).toString("base64")}`
  );

  const defaultRequestOptions: RequestInit = {
    method: "GET",
    headers,
    redirect: "follow",
  };

  const _requestOptions: RequestInit = {
    ...defaultRequestOptions,
    ...requestOptions,
  };

  return fetch(`${BASE_URL}/${path}`, _requestOptions);
};

export async function termsGet(config: FullCloudTermsConfig): Promise<
  {
    applicationId: string;
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    orgId: string | null;
    termId: string;
    content: string;
  }[]
> {
  return request(config, "terms")
    .then((res) => res.json())
    .then((res) => res.data);
}

export async function userSetAgreed(
  config: FullCloudTermsConfig,
  userId: UserId
): Promise<{
  externalUserId: string;
  applicationId: string;
  createdAt: Date;
  updatedAt: Date;
  lastAgreed: Date;
}> {
  return request(config, `users/${userId}/agree`, { method: "POST" })
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export async function userHasAgreed(
  config: FullCloudTermsConfig,
  userId: UserId
): Promise<boolean> {
  return request(config, `users/${userId}/has-agreed`)
    .then((res) => res.json())
    .then((res) => res.data);
}
