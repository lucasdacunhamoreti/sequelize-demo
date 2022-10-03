const Sequelize = require('sequelize');

const sequelize = new Sequelize('store', 'postgres', 'docker', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
});

module.exports = sequelize;