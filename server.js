const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res, next) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);


    res.json({
        sucess:true,
        message: "HELLO WORLD"
    });
});

app.listen( port, () => {
    console.log('Server IS running');
});