const express = require('express');
const app = express();
const port = 3000; // Choose an appropriate port

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
    res.send('Hello, this is your web application.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

