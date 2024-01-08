// models/user.js
export const createUsersModel = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userType: {
    type: DataTypes.ENUM('regular', 'creator'),
    defaultValue: 'regular',
    allowNull: false,
  },
}, {
  timestamps: true,
});
return User;
}