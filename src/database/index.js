import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql'
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Connected to MySQL on port ${DB_PORT}`);
  } catch (error) {
    console.error('Error connecting to ', error);
  }
};

export default connection;
