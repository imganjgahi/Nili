const Sequelize = require('sequelize');
const sequelize = require('../db/mysqlDatabase');
const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lead: {
        type: Sequelize.STRING,
        defaultValue: "بدون توضیحات"
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tags: {
        type: Sequelize.STRING,
    },
    status: {
        type: Sequelize.TINYINT,
        defaultValue: 1
    },
    previewImage: {
        type: Sequelize.STRING,
        defaultValue: "product.jpg"
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }

})
module.exports = Product;