export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TINA_PUBLIC_IS_LOCAL: string;

      GITHUB_BRANCH: string;
      GITHUB_OWNER: string;
      GITHUB_REPO: string;
      GITHUB_PERSONAL_ACCESS_TOKEN: string;

      VERCEL_GIT_COMMIT_REF: string;

      KV_REST_API_URL: string;
      KV_REST_API_TOKEN: string;
    }
  }
}
