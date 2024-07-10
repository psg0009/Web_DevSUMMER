const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.post('/data', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ message: 'Data received successfully' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


