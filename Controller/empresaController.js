const controller = {};

//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('Select * from empresa',(err,empresa) =>{
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
        conn.query('insert into empresa set?', [data], (err,empresa) => {
            console.log(empresa);
            res.redirect('/');  
        });
    })
};


//Funcion para editar registros
controller.edit = (req, res) => {
const {idempresa}= req.params;
    req.getConnection((err,conn) =>{
        conn.query('select * from empresa where idempresa=?', [idempresa], (err,empresa) => {
            res.render('empresa_edit', {
            data: empresa[0]
            } );
        });
    });
};


//Funcion para actualizar
controller.update = (req,res) =>{
const {idempresa}= req.params;
const nuevo_idempresa = req.body;
    req.getConnection((err, conn) => {
        conn.query('update empresa set ? where idempresa =?', [nuevo_idempresa, idempresa], (err,rows) =>{
            res.redirect('/');
        });
    });
};


//Funcion para Eliminar registros
controller.delete = (req,res) =>{
const {idempresa}= req.params;
    req.getConnection((err,conn) => {
        conn.query('delete from empresa where idempresa =?', [idempresa], (err, rows) => {
        res.redirect('/');
        });
    })
};

module.exports = controller;