const express = require("express");
const app = express();
const bancoDeDados = require("./bancosDeDados");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 3000;



app.get("/produtos",(req ,res)=>{
	res.send(bancoDeDados.getProdutos());
});

app.get("/produtos/:id",(req,res)=>{
	res.send(bancoDeDados.getProduto(req.params.id));
});

app.post("/produtos", (req,res)=>{
	const produto = bancoDeDados.salvarProduto({
		nome: req.body.nome,
		preco:req.body.preco
	});
	res.send(produto);
});

app.put("/produtos/:id", (req,res)=>{
	const produto = bancoDeDados.salvarProduto({
		id: req.params.id,
		nome: req.body.nome,
		preco:req.body.preco
	});
	res.send(produto);
});

app.delete("/produtos/:id",(req,res)=>{
	const produtos = bancoDeDados.excluirProduto(req.params.id);
	res.send(produtos);
});


app.listen(port,()=>{
	console.log(`server on ${port}`);
});