import { DataTypes } from 'sequelize';
import { sequelize } from '../../index.js';
import Answer from './Answer.js';

const Quiz = sequelize.define('Quiz', {
  id_quiz: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  answer: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Answer,
      key: 'id_answer'
    }
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
});

Quiz.belongsTo(Answer, { foreignKey: 'answer' });

export default Quiz;
