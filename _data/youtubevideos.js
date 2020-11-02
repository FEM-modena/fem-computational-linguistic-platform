const fetch = require('node-fetch');
const querystring = require('querystring');

module.exports = function() {
  // GET https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCaBklQqq2sXNhyv8YnPejwA&key=[YOUR_API_KEY] HTTP/1.1

  // Authorization: Bearer [YOUR_ACCESS_TOKEN]
  // Accept: application/json

  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
  const PLAYLIST_ID = "PLbcwEMPTHI-xxnkA3eKTNcX-Z3nvo94vz";

  let resources = [];
  function YTApiGet(path, params) {
    const query_params = {
      ...params,
      key: GOOGLE_API_KEY
    }

    function parseResponse(data) {
      resources.push(...data.items);
      if (data.nextPageToken) {
        return YTApiGet(path, {...params, pageToken: data.nextPageToken})
      } else {
        return resources.sort((a, b) => a.snippet.position - b.snippet.position);
      }
    }
    let uri = `https://youtube.googleapis.com${path}?${querystring.stringify(query_params)}`;
    return fetch(uri, headers={'Accept': 'application/json'})
            .then(res => res.json())
            .then(parseResponse)
            .catch(error => console.error(error));
  }
  return YTApiGet("/youtube/v3/playlistItems", {part: 'snippet', playlistId: PLAYLIST_ID})
}