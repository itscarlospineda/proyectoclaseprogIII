const controller = {};

//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('Select * from areas_trabajo',(err,areas_trabajo) =>{
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
        conn.query('insert into areas_trabajo set?', [data], (err,areas_trabajo) => {
            console.log(areas_trabajo);
            res.redirect('/');  
        });
    })
};


//Funcion para editar registros
controller.edit = (req, res) => {
const {idarea}= req.params;
    req.getConnection((err,conn) =>{
        conn.query('select * from areas_trabajo where idarea=?', [idarea], (err,areas_trabajo) => {
            res.render('areas_trabajo_edit', { //duda
            data: areas_trabajo[0]
            } );
        });
    });
};


//Funcion para actualizar
controller.update = (req,res) =>{
const {idarea}= req.params;
const nuevo_idarea = req.body;
    req.getConnection((err, conn) => {
        conn.query('update areas_trabajo set ? where idarea =?', [nuevo_idarea, idarea], (err,rows) =>{
            res.redirect('/');
        });
    });
};


//Funcion para Eliminar registros
controller.delete = (req,res) =>{
const {idarea}= req.params;
    req.getConnection((err,conn) => {
        conn.query('delete from areas_trabajo where idarea =?', [idarea], (err, rows) => {
        res.redirect('/');
        });
    })
};

module.exports = controller;