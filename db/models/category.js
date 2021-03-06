module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Category.associate = (models) => {
    // associations can be defined here
    Category.hasMany(models.Item, {
      foreignKey: 'category_id',
    });
  };
  return Category;
};
