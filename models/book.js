'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    publisher: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {});

  Book.associate = ({ User, Basket }) => {
    Book.belongsToMany(User, {
      as: 'owners',
      through: 'Basket',
      foreignKey: 'bookId',
      otherKey: 'ownerId'
    });

    Book.belongsTo(Basket, {
      as: 'basket',
      foreignKey: 'id'
    });
  };

  return Book;
};
