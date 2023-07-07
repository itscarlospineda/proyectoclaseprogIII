const controller = {};

//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('Select * from proveedor',(err,proveedor) =>{
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
        conn.query('insert into proveedor set?', [data], (err,proveedor) => {
            console.log(proveedor);
            res.redirect('/');  
        });
    })
};


//Funcion para editar registros
controller.edit = (req, res) => {
const {idprov}= req.params;
    req.getConnection((err,conn) =>{
        conn.query('select * from proveedor where idprov=?', [idprov], (err,proveedor) => {
            res.render('proveedor_edit', {
            data: proveedor[0]
            } );
        });
    });
};


//Funcion para actualizar
controller.update = (req,res) =>{
const {idprov}= req.params;
const nuevo_idprov = req.body;
    req.getConnection((err, conn) => {
        conn.query('update proveedor set ? where idprov =?', [nuevo_idprov, idprov], (err,rows) =>{
            res.redirect('/');
        });
    });
};


//Funcion para Eliminar registros
controller.delete = (req,res) =>{
const {idprov}= req.params;
    req.getConnection((err,conn) => {
        conn.query('delete from proveedor where idprov =?', [idprov], (err, rows) => {
        res.redirect('/');
        });
    })
};

module.exports = controller;