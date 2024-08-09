import { DataTypes } from 'sequelize';
import { sequelize } from '../../index.js';
import GameByUser from './GameByUser.js';
import Category from './Category.js';
import Quiz from './Quiz.js';

const Result = sequelize.define('Result', {
  id_result: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_game_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: GameByUser,
      key: 'id'
    }
  },
  Category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id_category'
    }
  },
  quiz: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Quiz,
      key: 'id_quiz'
    }
  },
  create_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
});

Result.belongsTo(GameByUser, { foreignKey: 'id_game_user' });
Result.belongsTo(Category, { foreignKey: 'Category' });
Result.belongsTo(Quiz, { foreignKey: 'quiz' });

export default Result;
