import { createDatabase, createLocalDatabase } from '@tinacms/datalayer';
import { GitHubProvider } from 'tinacms-gitprovider-github';
import { RedisLevel } from 'upstash-redis-level';

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true';

// https://tina.io/docs/reference/self-hosted/database-adapter/vercel-kv/
const databaseClient = isLocal
  ? createLocalDatabase()
  : createDatabase({
      gitProvider: new GitHubProvider({
        branch: process.env.GITHUB_BRANCH,
        owner: process.env.GITHUB_OWNER,
        repo: process.env.GITHUB_REPO,
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
      }),
      databaseAdapter: new RedisLevel({
        redis: {
          url: process.env.KV_REST_API_URL,
          token: process.env.KV_REST_API_TOKEN,
        },
      }),
    });

export default databaseClient;
