const { Datatypes} =require('sequelize')

const db = require('../db/conn')

const Carro = db.define('carro',{
    codCarro:{
       type: Datatypes.INTEGER,
       primaryKey: true,
       autoIncrement: true 
    },
    nome:{
        type: Datatypes.STRING(100),
        allowNull: false
    },
    marca:{
        type:Datatypes.STRING(100),
        allowNull: false
    },
    categoria:{
        type:Datatypes.STRING(100),
        allowNull: false
    },
    ano:{
        type: Datatypes.FLOAT,
        allowNull: false
    },
    preco_fabrica:{
        type:Datatypes.FLOAT,
        allowNull:false
    },
    preco_venda:{
        type: Datatypes.FLOAT,
        allowNull: false
    }
},{
    timestamps:false
})

module.exports = Carro