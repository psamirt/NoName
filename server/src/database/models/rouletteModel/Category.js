import { DataTypes } from 'sequelize';
import { sequelize } from '../../index.js';
import User from '../userModel/User.js';

const Category = sequelize.define('Category', {
  id_category: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  description: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
});

Category.belongsTo(User, { foreignKey: 'id_user' });

export default Category;
