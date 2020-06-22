const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static('./dist/SisMip'));

ngApp.get('/', (req, resp) => {
  resp.sendFile(path.join(__dirname, './dist/SisMip/index.html'));
});

ngApp.listen(process.env.PORT || 3000, () => {
  console.log('App up');
});
