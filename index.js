const express = require("express"); // ativo a funcao do express
const app = express();              // importo o express para dentro da variavel app

app.set('view engine','ejs');       // Estou dizendo para o express para usar o EJS como View engine para desenhar o meu HTML
app.use(express.static('public'));


app.get("/",(req, res)=>{              // Rota padrao ao acessar a rota solicito dois parametos ao usuario
 
    res.render("index");
      
                
});

app.get("/perguntar",(req,res)=> {
res.render("perguntar");
});

app.listen(4026,()=>{                 // inicio o servidor
    console.log("App rodando!");
    
});