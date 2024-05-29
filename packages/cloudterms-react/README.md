# @cloudterms/react

# React Quickstart

Simplify term agreements in your React applications with @cloudterms/react. This package provides a pre-built CloudTermsProvider component that wraps your app, ensuring users agree to terms before accessing your content.

###### [Docs](https://docs.cloudterms.dev)

###### [Example](https://github.com/cloudterms/cloudterms/tree/main/examples/react-vite), uses [Hono API example](https://github.com/cloudterms/cloudterms/tree/main/examples/hono-api) for interacting with CloudTerms.

**Key Features:**

- Includes the @cloudterms/js SDK.
- Pre-built Agree to Terms Component: A modal window that pops up, disabling your app until the user agrees to the terms.
- Easy Integration: Simply wrap your app with the CloudTermsProvider component to get started.
- Customizable: Tailor the agreement experience to fit your brand and needs.

Get started with @cloudterms/react today and streamline term agreements in your React applications!

## Setup

### Install `@cloudterms/react`

```bash
npm install @cloudterms/react
```

### Usage

Wrap your app with the CloudTermsProvider component.

**Props:**

- `userId` A unique userId that identifies the user to track their agreements.
- `terms` An array of terms to display to the user.
- `hasAgreed` A boolean that indicates if the user has agreed to the terms. When true, the modal will not display. When false, the modal will prompt the user to agree to the terms.
- `onAgree` A function that handles the user's agreement to the terms. If you are using React without Next.js, you will need to handle the user's agreement to the terms manually.

```jsx
<CloudTermsClientProvider
  userId={userId}
  terms={terms}
  hasAgreed={hasAgreed}
  onAgree={onAgree}
>
  <App />
</CloudTermsClientProvider>
```
