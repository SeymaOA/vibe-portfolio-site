/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_NEWSLETTER_ENDPOINT?: string;
  readonly PUBLIC_NEWSLETTER_LIST_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
