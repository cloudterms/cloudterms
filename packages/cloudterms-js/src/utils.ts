import type { CloudTermsConfig, FullCloudTermsConfig } from "./types";

/**
 * Helper function to get the CloudTerms configuration.
 * Values in the config object take precedence over environment variables.
 * If either the appId or secret is not provided, an error is thrown.
 */
export function getConfig(config: CloudTermsConfig): FullCloudTermsConfig {
	const appId = config?.appId || process.env.CLOUDTERMS_APP_ID;
	const secret = config?.secret || process.env.CLOUDTERMS_APP_SECRET;

	if (!appId && !secret) {
		throw new Error("CloudTerms App ID and Secret Key are required");
	}

	if (!appId) {
		throw new Error("CloudTerms App ID is required");
	}

	if (!secret) {
		throw new Error("CloudTerms Secret Key is required");
	}

	return { appId, secret };
}

export function getBaseUrl() {
	return process.env.CLOUDTERMS_BASE_URL || "https://cloudterms.dev/api/v1";
}
