// import JSO from "https://unpkg.com/jso/dist/jso.js";

// let client = new JSO({
// 	providerID: "yahoo",
// 	client_id: "dj0yJmk9amo1RWdzUmRaUDVhJmQ9WVdrOVEyNDRTSFpITnpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTI3",
// 	redirect_uri: "https://localhost:5500", // The URL where you is redirected back, and where you perform run the callback() function.
// 	authorization: "https://api.login.yahoo.com/oauth2/request_auth",
// 	scopes: { request: ["fspt-r"]}
// });
// client.callback();

import { SalteAuth } from '@salte-auth/salte-auth';

// Configure SalteAuth with Auth0's url and client id.
const auth = new SalteAuth({
  providerUrl: 'https://salte-os.auth0.com',
  responseType: 'id_token',
  redirectUrl: location.origin,
  clientId: '9JTBXBREtckkFHTxTNBceewrnn7NeDd0',
  scope: 'openid',

  routes: [
    'http://localhost:8080/account'
  ],

  endpoints: [
    'https://jsonplaceholder.typicode.com/posts/1'
  ],

  provider: 'auth0'
});

// Display an iframe to the user that allows them to login
auth.loginWithIframe();