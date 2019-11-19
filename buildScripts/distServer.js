import express from 'express';
import { join } from 'path';
import compression from 'compression';


/*eslint-disable no-console*/

const port = process.env.PORT || 3000;
const app = express();

app.use(compression());

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(port, () => { console.log(`Server is up and running on port : ${port}`) });
