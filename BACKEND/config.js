const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgredb_8eb2', 'postgredb_8eb2_user', 'yjQ0BkvV6rInMycuyPzICCuie5xrPm80', {
  host: 'dpg-cu0dfrpopnds738o81dg-a.frankfurt-postgres.render.com',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = {
  ACCESS_TOKEN_SECRET: "EMMA123",
  sequelize
};