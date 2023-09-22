/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOCKSERVER_PATH: string
  readonly VITE_API_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}