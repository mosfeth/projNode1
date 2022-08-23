const express = require("express"); // ativo a funcao do express
const app = express();              // importo o express para dentro da variavel app
const bodyParser = require("body-parser");
const connection = require("./database/database");
//Database
connection
   .authenticate()
   .then(() =>{
        console.log("Conexao feita com sucesso!")
   })
   .catch((msgErro)=>{
    console.log(msgErro);
   })


app.set('view engine','ejs');       // Estou dizendo para o express para usar o EJS como View engine para desenhar o meu HTML
app.use(express.static('public'));


app.use(bodyParser.urlencoded({extended: false}))   // Decodifica os dados enviados pelo formulario
app.use(bodyParser.json());

app.get("/",(req, res)=>{              // Rota padrao ao acessar a rota solicito dois parametos ao usuario
 
    res.render("index");
                    
});

app.get("/perguntar",(req,res)=> {
res.render("perguntar");
});

app.post("/salvarpergunta",(req,res)=>{
 var titulo = req.body.titulo;
 var descricao = req.body.descricao;
    res.send("Formulario recebido! Titulo " + titulo + " " + ("Descricao ") + descricao);
})


app.listen(4026,()=>{                 // inicio o servidor
    console.log("App rodando!");
    
});