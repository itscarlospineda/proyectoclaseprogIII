const controller = {};

//Listar registros
controller.list = (req, res) => {
const estado='Activo';
const num_clie=req.body.num_clie;
    req.getConnection((error,conn) =>{
        conn.query('select * from clientes where estado=? and num_clie=? order by 1 desc',[estado,num_clie],
        (err,clientes) =>{
            if(err){
                res.json(clientes);
            }
        });
    });
};

module.exports = controller;