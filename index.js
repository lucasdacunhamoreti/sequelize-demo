const Produto = require('./product');

(async () => {
    const database = require('./db');
    const Product = require('./product');
    await database.sync();


    // CRIANDO UM PRODUTO
    await Product.create({
      name: 'Cadeira Gamer',
      price: '860',
      description: 'Cadeira Gamer SpeedRacing'
     });

    // LEITURA DE UM PRODUTOS

    // PEGA TODOS OS REGISTROS
    const produtos = await Product.findAll();
    console.log(produtos);

    // PEGA REGISTRO POR UM VALOR ESPECÍFICO
    const produto1 = await Product.findAll({
        where: {
            price: 13
        }
    });
    console.log(produto1);

    // PEGA PELO ID
    const produtoId = await Produto.findByPk(4);
    console.log(produtoId);

    // ATUALIZANDO DADO
    produtoId.description = "Atualizando produto";
    await produtoId.save();

    // EXCLUINDO DADOS
    await produtoId.destroy();
})();