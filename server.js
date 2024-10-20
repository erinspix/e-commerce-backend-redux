const express = require('express');
const routes = require('./routes'); // Ensure the path is correct

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes); // Use the routes from the routes folder

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
