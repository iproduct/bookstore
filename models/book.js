'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    publisher: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    genre: DataTypes.STRING
  }, {});

  Book.associate = (models) => {
    // associations can be defined here
  };
  return Book;
};
