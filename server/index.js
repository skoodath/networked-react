const path = require('path');

const express = require('express');

const app = express();

const buildPath = path.join(__dirname, '..', 'build');

app.use(express.json());
app.use(express.static(buildPath));

app.post('/', (request, response) => {
    console.log(request.body);
    response.send(request.body);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
});