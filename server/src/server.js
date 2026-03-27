require('dotenv').config();
const app = require('./app'); // Make sure the path to app.js is correct
const PORT = process.env.PORT || 5005;

app.listen(PORT, (err) => {
    console.log(`Server is listening on port ${PORT}`);
});