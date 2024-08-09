import { DataTypes } from 'sequelize';
import { sequelize } from '../../index.js';

const User = sequelize.define('User', {
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  user_lastname: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
    // unique: true,
  },

  // 1: Male / 2:Female / 3: Undefined
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },

  // 1: Male / 2:Female / 3: Undefined
  level: {
    type: DataTypes.STRING,
    allowNull: true
  },

  total_points: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default User;
