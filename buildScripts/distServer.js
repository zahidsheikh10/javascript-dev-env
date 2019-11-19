import express from 'express';
import { join } from 'path';
import compression from 'compression';


/*eslint-disable no-console*/

const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/users', (req, res) => {
    // Hard coding for simplicity. Pretend this hits a real database
    res.json([
        { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com" },
        { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
        { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
    ]);
});

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(port, () => { console.log(`Server is up and running on port : ${port}`) });
