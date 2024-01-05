export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TINA_PUBLIC_IS_LOCAL: string;

      GITHUB_BRANCH: string;

      VERCEL_GIT_COMMIT_REF: string;
    }
  }
}
