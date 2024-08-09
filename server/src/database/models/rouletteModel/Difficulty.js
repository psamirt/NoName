import { DataTypes } from 'sequelize';
import { sequelize } from '../../index.js';

const Difficulty = sequelize.define('Difficulty', {
  id_difficulty: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
});

export default Difficulty;
