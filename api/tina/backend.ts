import { LocalBackendAuthProvider, TinaNodeBackend } from '@tinacms/datalayer';

import databaseClient from './databaseClient';

import type { IncomingMessage, ServerResponse } from 'http';
import type { TinaBackendOptions } from '@tinacms/datalayer';

export const authProvider = LocalBackendAuthProvider();

const options: TinaBackendOptions = {
  authProvider,
  databaseClient,
};

const handler = TinaNodeBackend(options);

export default (req: IncomingMessage, res: ServerResponse) => {
  return handler(req, res);
};
