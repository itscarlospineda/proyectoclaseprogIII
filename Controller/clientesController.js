const controller = {};

//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('Select * from clientes',(err,clientes) =>{
            if(err){
                res.json(err);
            }
        });
    });
};

//Funcion para guardar registros
controller.save = (req,res) =>{
const data = req.body;
    req.getConnection((err,conn)=> {
        conn.query('insert into clientes set?', [data], (err,clientes) => {
            console.log(clientes);
            res.redirect('/');  
        });
    })
};


//Funcion para listar registros
controller.edit = (req, res) => {
const {num_clie}= req.params;
    req.getConnection((err,conn) =>{
        conn.query('select * from clientes where num_clie=?', [num_clie], (err,clientes) => {
            res.render('clientes_edit', {
            data: clientes[0]
            } );
        });
    });
};


//Funcion para actualizar
controller.update = (req,res) =>{
const {num_clie}= req.params;
const nuevo_num_clie = req.body;
    req.getConnection((err, conn) => {
        conn.query('update clientes set ? where num_clie =?', [nuevo_num_clie, num_clie], (err,rows) =>{
            res.redirect('/');
        });
    });
};


//Funcion para Eliminar registros
controller.delete = (req,res) =>{
const {num_clie}= req.params;
    req.getConnection((err,conn) => {
        conn.query('delete from clientes where num_clie =?', [num_clie], (err, rows) => {
        res.redirect('/');
        });
    })
};

module.exports = controller;