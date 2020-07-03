const Sequelize = require ('sequelize')
const sequelize = new Sequelize('reserva_ru','root','admin123',{
  
    host:"localhost",
    dialect:'mysql'



})

sequilize.authenticate().then(
    function()
    {
        console.log("Conectou com sucesso!")
    }
).catch(function(error){
    console.log("Falha ao se conectar:" +error)
})