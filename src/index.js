const express = require('express');
const app = express();

// app.use(function(_req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   next();
// });

app.get('/orders', (_req, res) => {
  res.send('Get Orders');
});

// app.use((_req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE"
//   );
//   next();
// });

// app.put('/orders', (_req, res) => {
//   console.log('updating orders');
//   res.send('updating orders');
// });

let port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});