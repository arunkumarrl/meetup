'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=vogprrbq5kb6f74tbtsjntihku'
    + '&client_secret=g0369ccq44km3nbt13epf2l0er'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://arunkumarrl.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};