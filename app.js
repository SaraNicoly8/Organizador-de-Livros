const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const livroRoutes = require('./src/routes/livroRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
