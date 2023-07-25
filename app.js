//Archivo para enlazar back-end y front-end
const express = require("express");
const path = require('path');
const morgan = require('morgan');
//const myConnection= require('express-myconnection');
const app = express();
const port = 3000; //3000 se trabaja por defecto en un entorno de desarrollo node.js


//Importación de rutas
const empresaRoutes = require('./Routes/empresa');
const proveedorRoutes = require('./Routes/proveedor');
const sucursalesRoutes = require('./Routes/sucursales');
const areas_trabajoRoutes = require('./Routes/areas_trabajo');
const clientesRoutes = require('./Routes/clientes');
const tipousuarioRoutes = require('./Routes/tipousuario');
const usuarioRoutes = require('./Routes/usuario');
const productoRoutes = require('./Routes/producto');
const tipoproductoRoutes = require('./Routes/tipoproducto');
const formapagoRoutes = require('./Routes/formapago');
//================================================================================

app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

//middlewares
app.use(morgan('dev')); 
var Connection = require('tedious').Connection;  //Invocando librería tedious
    var config = {  
        server: 'LAPTOP-0L3I744F\SQLEXPRESS',  
        authentication: {
            type: 'default',
            options: {
                userName: 'pineda', 
                password: 'Andres8!'  
            }
        },
        options: {
            
            encrypt: true,
            database: 'VENTAS'  
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {
        console.log("Ingreso a la Base de Datos");  
    });
    
connection.connect();

module.exports=connection;

app.get('/', function(req, res) {
//    res.render('empresa');
//    res.render('proveedor');
//    res.render('sucursales');
//    res.render('areas_trabajo');
//    res.render('clientes');
//    res.render('tipousuario');
//    res.render('usuario');
//    res.render('tipoproducto');
//    res.render('producto');
    res.render('formapago');
});

app.listen(port, function () {
    console.log(`Puerto ${port}!`);
}); 