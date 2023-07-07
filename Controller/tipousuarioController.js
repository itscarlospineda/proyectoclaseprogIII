const controller = {};

//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('Select * from tipousuario',(err,tipousuario) =>{
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
        conn.query('insert into tipousuario set?', [data], (err,tipousuario) => {
            console.log(tipousuario);
            res.redirect('/');  
        });
    })
};

//Funcion para editar registros
controller.edit = (req, res) => {
const {idtpusuario}= req.params;
    req.getConnection((err,conn) =>{
        conn.query('select * from tipousuario where idtpusuario=?', [idtpusuario], (err,tipousuario) => {
            res.render('tipousuario_edit', {
            data: tipousuario[0]
            } );
        });
    });
};


//Funcion para actualizar
controller.update = (req,res) =>{
const {idtpusuario}= req.params;
const nuevo_idtpusuario = req.body;
    req.getConnection((err, conn) => {
            conn.query('update tipousuario set ? where idtpusuario =?', [nuevo_idtpusuario, idtpusuario], (err,rows) =>{
            res.redirect('/');
        });
    });
};


//Funcion para Eliminar registros
controller.delete = (req,res) =>{
const {idtpusuario}= req.params;
    req.getConnection((err,conn) => {
        conn.query('delete from tipousuario where idtpusuario =?', [idtpusuario], (err, rows) => {
        res.redirect('/');
        });
    })
};

module.exports = controller;