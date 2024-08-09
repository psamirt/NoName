import { DataTypes } from 'sequelize';
import { sequelize } from '../../index.js';
import AnswerOption from './AnswerOption.js';

const Answer = sequelize.define('Answer', {
  id_answer: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  option: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AnswerOption,
      key: 'id'
    }
  },
  is_valid: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

Answer.belongsTo(AnswerOption, { foreignKey: 'option' });

export default Answer;
