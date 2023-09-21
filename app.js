const express = require('express');
const app = express();
const port = 3333;

const tvRouters = require('./routes/tvRoutes');

app.get('/', (req, res) => {
    res.send('PIIR 0.0.1');
});

app.use('/tv', tvRouters)

app.listen(port, () => {
    console.log(`[i] PIIR is listening on port ${port}`);
});