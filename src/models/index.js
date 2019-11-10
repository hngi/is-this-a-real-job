import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { NODE_ENV } from '../config/constants';
import configs from '../database/config';

const basename = path.basename(__filename);
const env = NODE_ENV || 'development';
const config = configs[env];
const db = {};
const sequelize = config.use_env_variable
  ? new Sequelize(config.url, config)
  : new Sequelize(
    config.database, config.username, config.password, config
  );
fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Sequelize.Op;

export default db;
