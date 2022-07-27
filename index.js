const express = require("express"); // ativo a funcao do express
const app = express();              // importo o express para dentro da variavel app

app.set('view engine','ejs');       // Estou dizendo para o express para usar o EJS como View engine para desenhar o meu HTML



app.get("/:nome/:lang",(req, res)=>{              // Rota padrao ao acessar a rota solicito dois parametos ao usuario
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [
        {nome: "Doritos",preco:3.14},
        {nome: "Coca-cola",preco:5},
        {nome:"Leite",preco:1.45}
    ]
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Cmostec",
        inscritos: 8000,
        msg: exibirMsg,
        produtos:produtos
    });              // Mando desenhar na tela a pagina html index que esta na pasta views
});


app.listen(8080,()=>{                 // inicio o servidor
    console.log("App rodando!");
    
});