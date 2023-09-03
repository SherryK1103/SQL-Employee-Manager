const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello, this is your web application.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});