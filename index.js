const express = require('express');
const app = express();
const port = 3000;

//define a route
app.get('/', (req, res) => {
    return res.send('<h1 style="color:red;">Hello World!</h1>');
});

//port 3000
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});