/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOCKSERVER_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}