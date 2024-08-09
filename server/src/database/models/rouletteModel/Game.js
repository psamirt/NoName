import { DataTypes } from 'sequelize';
import { sequelize } from '../../index.js';
import Difficulty from './Difficulty.js';

const Game = sequelize.define('Game', {
  id_game: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  difficulty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Difficulty,
      key: 'id_difficulty'
    }
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
});

Game.belongsTo(Difficulty, { foreignKey: 'difficulty_id' });

export default Game;
