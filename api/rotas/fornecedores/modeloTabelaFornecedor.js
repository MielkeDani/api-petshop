const Sequelize = require('sequelize')

const instacia = require('../../banco-de-dados')

const colunas = { 
    empresa: { 
        type: Sequelize.STRING, 
        allowNull: false, 
    }, 
    email: {
        type: Sequelize.STRING, 
        allowNull: false, 
    }, 
    categoria : {
        type: Sequelize.ENUM('ração', 'brinquedos'), 
        allowNull: false, 
        }
}

const opcoes = {
    FreezeTableName : true, 
    TableName: 'fornecedores', 
    timestamps: true , 
        createdAt : 'dataCriacao', 
        updatedAt : 'dataAtualizacao', 
        version: 'versao'
}
module.exports = instacia.define('fornecedor', colunas, opcoes)