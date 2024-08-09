import { DataTypes } from 'sequelize';
import { sequelize } from '../../index.js';
import Game from './Game.js';
import User from '../userModel/User.js';

const GameByUser = sequelize.define('GameByUser', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_game: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Game,
      key: 'id_game'
    }
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
});

GameByUser.belongsTo(Game, { foreignKey: 'id_game' });
GameByUser.belongsTo(User, { foreignKey: 'id_user' });
export default GameByUser;
