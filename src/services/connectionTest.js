/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import Model from '../models';

export const connectionTest = () => {
  return Model
  .sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to database successful.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}
