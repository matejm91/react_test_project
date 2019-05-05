const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const clientPath = path.resolve(
    `${__dirname}/../../client/public/index.html`
  );
  res.sendFile(clientPath);
});

/**
 * old backend left here just for reference
 *
 * used as a function that is called in app.js which is sending urls
 * and this functions routes it
 * USEFULL
 */
// const router = app => {
//   app.get('*', (req, res) => {
//     const clientPath = path.resolve(
//       `${__dirname}/../../client/public/index.html`
//     );
//     res.sendFile(clientPath);
//   });
// };

module.exports = router;
