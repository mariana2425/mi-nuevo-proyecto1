import { TURSO_CONNECTION_URL, TURSO_AUTH_TOKEN } from '$env/static/private'
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './data';

const client = createClient({
  url: TURSO_CONNECTION_URL,
  authToken: TURSO_AUTH_TOKEN,
});
export const db = drizzle(client, { schema });