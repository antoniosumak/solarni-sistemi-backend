const express = require('express');
const router = require('./routes/index');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const app = express();

app.use(cors({ origin: '*' }));

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(fileUpload());
app.use(router);
app.listen(PORT, () => {
  console.log(`Server is up on PORT : ${PORT}`);
});
