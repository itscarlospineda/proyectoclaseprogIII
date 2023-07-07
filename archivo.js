//Archivo para enlazar back-end y front-end
const express = require("express");
const path = require('path');
const morgan = require('morgan');
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

const empresaRRoutes = require('./RRoutes/empresaR');
const proveedorRRoutes = require('./RRoutes/proveedorR');
const sucursalesRRoutes = require('./RRoutes/sucursalesR');
const areas_trabajoRRoutes = require('./RRoutes/areas_trabajoR');
const clientesRRoutes = require('./RRoutes/clientesR');
const tipousuarioRRoutes = require('./RRoutes/tipousuarioR');
const usuarioRRoutes = require('./RRoutes/usuarioR');
const productoRRoutes = require('./RRoutes/productoR');
const tipoproductoRRoutes = require('./RRoutes/tipoproductoR');
const formapagoRRoutes = require('./RRoutes/formapagoR');
//================================================================================

app.get("/", function (req, res) {
res.send("Bienvenido");
});

app.listen(port, function () {
console.log(`Puerto ${port}!`);
}); 

app.use(morgan('dev')); //middlewares
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