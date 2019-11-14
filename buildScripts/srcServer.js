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

app.get('/',(req,res) => {
  res.sendFile(join(__dirname,'../src/index.html'));
});

app.listen(port,() => {console.log(`Server is up and running on port : ${port}`)});
