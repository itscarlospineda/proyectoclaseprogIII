const controller = {};

//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('Select * from usuario',(err,usuario) =>{
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
        conn.query('insert into usuario set?', [data], (err,usuario) => {
            console.log(usuario);
            res.redirect('/');  
        });
    })
};


//Funcion para editar registros
controller.edit = (req, res) => {
const {userid}= req.params;
    req.getConnection((err,conn) =>{
        conn.query('select * from usuario where userid=?', [userid], (err,usuario) => {
            res.render('usuario_edit', {
            data: usuario[0]
            } );
        });
    });
};


//Funcion para actualizar
controller.update = (req,res) =>{
const {userid}= req.params;
const nuevo_userid = req.body;
    req.getConnection((err, conn) => {
        conn.query('update usuario set ? where userid =?', [nuevo_userid, userid], (err,rows) =>{
            res.redirect('/');
        });
    });
};


//Funcion para Eliminar registros
controller.delete = (req,res) =>{
const {userid}= req.params;
    req.getConnection((err,conn) => {
        conn.query('delete from usuario where userid =?', [userid], (err, rows) => {
        res.redirect('/');
        });
    })
};

module.exports = controller;