import { env } from '@/config/env';

export default {
  jwt: {
    secret: env().jwt_secret_key,
    expiresIn: '1d',
  },
};
