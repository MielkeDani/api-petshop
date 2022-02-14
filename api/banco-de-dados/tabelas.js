const ModeloTabela = require('../rotas/fornecedores/modeloTabelaFornecedor')

ModeloTabela
    .sync()
    .then(()=> console.log('Tabela criado com sucesso'))
    .catch(console.log)