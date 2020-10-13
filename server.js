const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const ci = process.env.ENV === 'ci';
const dev = process.env.ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev, dir: './ts_out/_frontend' });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cookieParser());
  server.use(cors({ credentials: true, origin: true }));

  if (!ci) {
    const repo = require('./ts_out/_repository/_config');
    server.use(repo);

    const home = require('./ts_out/_backend/home_service/_api');
    const plant = require('./ts_out/_backend/plant_service/server');
    const user = require('./ts_out/_backend/user_service/server');
    server.use(home);
    server.use(plant);
    server.use(user);
  }

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    if (ci) process.exit(0);
    console.log(`> App ready on http://localhost:${port}`);
  });
})
.catch((e) => {
  console.error(e.stack);
  process.exit(1);
});
