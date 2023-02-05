import Sequelize from 'sequelize';
import DatabaseConfig from './config/config.cjs'

import User from './models/user.js'

const models = [User];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(DatabaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new DataBase()

