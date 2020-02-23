'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=AKIAJOPHWK4KMYYXWZ3Q#'
    + '&client_secret=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'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://arunkumarrl.github.io/meetup/'
    + '&code=https://secure.meetup.com/oauth2/authorize?client_id=vogprrbq5kb6f74tbtsjntihku&response_type=code&redirect_uri=https://arunkumarrl.github.io/;'

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};