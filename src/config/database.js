require('dotenv').config();

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  seederStorage: 'sequelize',
  dialect: process.env.DB_DIALECT,
  logging: false,
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_bin',
    timestamps: true,
  },
};