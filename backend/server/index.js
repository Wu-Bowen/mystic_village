const server = require("./routes"); // load up the web server
const PORT = process.env.PORT || 3001; // the port to listen to for incoming requests
// call express's listen function to start listening to the port
const listener = server.listen(PORT, function () {
    console.log(`Server running on port: ${PORT}`);
});
// a function to stop listening to the port
const close = () => {
    listener.close();
};
module.exports = {
    close: close,
};


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const PORT = process.env.PORT || 3001;

// const routes = require('./routes/apartments');

// const app = express();

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use('/apartments', routes);

// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });