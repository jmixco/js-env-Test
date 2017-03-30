import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';


const port = 3000;
const app = express();

/* eslint-disable no-console*/
app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
    
    let users=[
        {"id":1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
        {"id":2,"firstName":"Tom","lastName":"North","email":"tom@gmail.com"},
        {"id":3,"firstName":"Max","lastName":"Payne","email":"max@gmail.com"},
    ];
    res.json(users);
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});