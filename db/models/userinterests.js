module.exports = (sequelize) => {
  const UserInterests = sequelize.define('UserInterests', {
    // nothing to define
  }, {});
  UserInterests.associate = (models) => {
    UserInterests.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    UserInterests.belongsTo(models.Item, {
      foreignKey: 'item_id',
    });
  };
  return UserInterests;
};
