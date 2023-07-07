const controller = {};

//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('Select * from producto',(err,producto) =>{
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
        conn.query('insert into producto set?', [data], (err,producto) => {
            console.log(producto);
            res.redirect('/');  
        });
    })
};


//Funcion para editar registros
controller.edit = (req, res) => {
const {num_prod}= req.params;
    req.getConnection((err,conn) =>{
        conn.query('select * from producto where num_prod=?', [num_prod], (err,producto) => {
            res.render('producto_edit', {
            data: producto[0]
            } );
        });
    });
};


//Funcion para actualizar
controller.update = (req,res) =>{
const {num_prod}= req.params;
const nuevo_num_prod = req.body;
    req.getConnection((err, conn) => {
        conn.query('update producto set ? where num_prod =?', [nuevo_num_prod, num_prod], (err,rows) =>{
            res.redirect('/');
        });
    });
};


//Funcion para Eliminar registros
controller.delete = (req,res) =>{
const {num_prod}= req.params;
    req.getConnection((err,conn) => {
        conn.query('delete from producto where num_prod =?', [num_prod], (err, rows) => {
        res.redirect('/');
        });
    })
};

module.exports = controller;