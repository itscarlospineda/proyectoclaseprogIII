const controller = {};

//Funcion para listar registros
controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('Select * from sucursales',(err,sucursales) =>{
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
        conn.query('insert into sucursales set?', [data], (err,sucursales) => {
            console.log(sucursales);
            res.redirect('/');  
        });
    })
};


//Funcion para listar registros
controller.edit = (req, res) => {
const {idsuc}= req.params;
    req.getConnection((err,conn) =>{
        conn.query('select * from sucursales where idsuc=?', [idsuc], (err,sucursales) => {
            res.render('sucursales_edit', {
            data: sucursales[0]
            } );
        });
    });
};


//Funcion para actualizar
controller.update = (req,res) =>{
const {idsuc}= req.params;
const nuevo_idsuc = req.body;
    req.getConnection((err, conn) => {
        conn.query('update sucursales set ? where idsuc =?', [nuevo_idsuc, idsuc], (err,rows) =>{
            res.redirect('/');
        });
    });
};


//Funcion para Eliminar registros
controller.delete = (req,res) =>{
const {idsuc}= req.params;
    req.getConnection((err,conn) => {
        conn.query('delete from sucursales where idsuc =?', [idsuc], (err, rows) => {
        res.redirect('/');
        });
    })
};

module.exports = controller;