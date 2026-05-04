const { Sequelize } = require('sequelize')
const db = new Sequelize('bd_03', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = db