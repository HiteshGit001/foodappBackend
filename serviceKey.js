import dotenv from 'dotenv';

dotenv.config();

const serviceKey = {
  "type": process.env.SERVICE_TYPE,
  "project_id": process.env.SERVICE_PROJECT_ID,
  "private_key_id": process.env.SERVICE_PRIVATE_KEY_ID,
  "private_key": process.env.SERVICE_PRIVATE_KEY,
  "client_email": process.env.SERVICE_CLIENT_EMAIL,
  "client_id": process.env.SERVICE_CLIENT_ID,
  "auth_uri": process.env.SERVICE_AUTH_URI,
  "token_uri": process.env.SERVICE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.SERVICE_AUTH_PROVIDER_CERT,
  "client_x509_cert_url": process.env.SERVICE_CLIENT_PROVIDER_CERT,
  "universe_domain": process.env.SERVICE_UNIVERSE_DOMAIN,
  "storageBucket": process.env.SERVICE_STORAGEBUCKET
}
console.log( process.env.SERVICE_STORAGEBUCKET)

export default serviceKey;