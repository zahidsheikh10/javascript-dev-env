import express from 'express';
import { join } from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/*eslint-disable no-console*/

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/users', (req, res) => {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
    { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
    { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
  ]);
});

app.get('/',(req,res) => {
  res.sendFile(join(__dirname,'../src/index.html'));
});

app.listen(port,() => {console.log(`Server is up and running on port : ${port}`)});
