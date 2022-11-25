const express = require ('express');

const app = express();


app.get('/' , (req, res)=> {
    res.send('Welcome to the ecommerce server!!');
});

app.get("/cart/buy.json" , (req, res)=> {
    let emercadoCartApi = require("./emercado-api-main/cart/buy.json");
    res.header("Access-Control-Allow-Origin","*");
    res.send(emercadoCartApi);
});
app.get("/cats/cat.json" , (req, res)=> {
    let Cats = require("./emercado-api-main/cats/cat.json");
    res.header("Access-Control-Allow-Origin","*");
    res.send(Cats);
});
app.get("/cats_products/:id" , (req, res)=> {
   let catsProducts = require("./emercado-api-main/cats_products/"+ req.params.id);
    res.send(catsProducts);
});     
app.get("/products/:id" , (req, res)=> {
    let Products = require("./emercado-api-main/products/"+ req.params.id);
     res.send(Products);
 });  

 app.get("/products_comments/:id" , (req, res)=> {
    let ProductsComments = require("./emercado-api-main/products_comments/"+ req.params.id);
     res.send(ProductsComments);
 });  

app.get("/sell/publish.json" , (req, res)=> {
    let emercadoSellApi = require("./emercado-api-main/sell/publish.json");
    res.header("Access-Control-Allow-Origin","*");
    res.send(emercadoSellApi);
});
app.get("/user_cart25801" , (req, res)=> {
    let emercadoUserCartApi = require("./emercado-api-main/user_cart/25801.json");
    res.header("Access-Control-Allow-Origin","*");
    res.send(emercadoUserCartApi);
});
app.listen(5000, ()=> {
    console.log('server 5000')
});