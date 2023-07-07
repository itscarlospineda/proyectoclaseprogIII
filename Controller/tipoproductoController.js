const controller = {};

//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('Select * from tipoproducto',(err,tipoproducto) =>{
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
        conn.query('insert into tipoproducto set?', [data], (err,tipoproducto) => {
            console.log(tipoproducto);
            res.redirect('/');  
        });
    })
};


//Funcion para editar registros
controller.edit = (req, res) => {
const {idtpprod}= req.params;
    req.getConnection((err,conn) =>{
        conn.query('select * from tipoproducto where idtpprod=?', [idtpprod], (err,tipoproducto) => {
            res.render('tipoproducto_edit', {
            data: tipoproducto[0]
            } );
        });
    });
};


//Funcion para actualizar
controller.update = (req,res) =>{
const {idtpprod}= req.params;
const nuevo_idtpprod = req.body;
    req.getConnection((err, conn) => {
        conn.query('update tipoproducto set ? where idtpprod =?', [nuevo_idtpprod, idtpprod], (err,rows) =>{
            res.redirect('/');
        });
    });
};


//Funcion para Eliminar registros
controller.delete = (req,res) =>{
const {idtpprod}= req.params;
    req.getConnection((err,conn) => {
        conn.query('delete from tipoproducto where idtpprod =?', [idtpprod], (err, rows) => {
        res.redirect('/');
        });
    })
};

module.exports = controller;