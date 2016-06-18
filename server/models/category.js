"use strict";

module.exports = function(sequelize, DataTypes) {
    let Category = sequelize.define('Category', {
        name: DataTypes.STRING
    });

    let AccountItem = sequelize.import('accountItem');

    Category.hasMany(AccountItem, {as: 'Items', foreignKey: 'categoryId'});

    return Category;
};