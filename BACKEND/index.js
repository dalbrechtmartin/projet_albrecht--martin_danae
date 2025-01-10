const express = require("express");
const cors = require("cors");
const { sequelize } = require('./config.js');
const app = express();

const corsOptions = {
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  headers: 'Content-Type, Authorization',
  exposedHeaders: 'Authorization'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/catalogue.routes")(app);
require("./routes/utilisateur.routes")(app);

const PORT = 443;
sequelize.sync({ alter: true }).then(() => { // alter: true pour mettre à jour la table existante
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});