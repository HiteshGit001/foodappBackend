const serviceKey = {
  "type": "service_account",
  "project_id": "foodorderapp-18590",
  "private_key_id": process.env.SERVICE_PRIVATE_KEY_ID,
  "private_key": process.env.SERVICE_PRIVATE_KEY,
  "client_email": "firebase-adminsdk-zrpv5@foodorderapp-18590.iam.gserviceaccount.com",
  "client_id": process.env.SERVICE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.SERVICE_CLIENT_PROVIDER_CERT,
  "universe_domain": "googleapis.com",
  "storageBucket": "gs://foodorderapp-18590.appspot.com"
}

export default serviceKey;