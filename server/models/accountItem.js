"use strict";

module.exports = function(sequelize, DataTypes) {
    var AccountItem = sequelize.define("AccountItem", {
        name: DataTypes.STRING
    });

    return AccountItem;
};