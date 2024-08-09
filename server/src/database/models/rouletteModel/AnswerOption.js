import { DataTypes } from 'sequelize';
import { sequelize } from '../../index.js';

const AnswerOption = sequelize.define('AnswerOption', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
});

export default AnswerOption;
