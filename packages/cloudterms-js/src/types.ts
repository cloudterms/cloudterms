export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

export type CloudTermsConfig = {
	appId?: string;
	secret?: string;
};

export type FullCloudTermsConfig = {
	appId: string;
	secret: string;
};

export type UserId = string;
