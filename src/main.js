const axios = require('axios');

const accessToken = '';

axios.get('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy', {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
.then(response => {
  // handle success
  console.log(response.data);
})
.catch(error => {
  // handle error
  console.error(error);
});