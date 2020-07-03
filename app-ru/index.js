const express = require ("express");
const app = express();   // instanciando uma copia inteira


conexão com o banco
const Sequelize = require ('sequelize');
const sequelize = new Sequelize('reserva_ru','root','admin123',{
  
    host:"localhost",
    dialect:'mysql'



})

sequelize.authenticate().then(
    function()
    {
        console.log("Conectou com sucesso!")
    }
).catch(function(error){
    console.log("Falha ao se conectar:" +error)
})
app.get("/", function (req,res){
	res.sendFile(__dirname+"/src/index.html");
})



// rotas
app.get ('/add')
app.listen (8081); // porta que roda o servidor


