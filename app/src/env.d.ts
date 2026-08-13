/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PB_URL: string;
  readonly VITE_PB_USER: string;
  readonly VITE_PB_PW: string;
  readonly VITE_API_HEADER: string;
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
