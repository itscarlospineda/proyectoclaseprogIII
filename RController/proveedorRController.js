const controller = {};

//Listar registros
controller.list = (req, res) => {
const estado='Activo';
const idprov=req.body.idprov;
    req.getConnection((error,conn) =>{
        conn.query('select * from proveedor where estado=? and idprov=? order by 1 desc',[estado,idprov],
        (err,proveedor) =>{
            if(err){
                res.json(proveedor);
            }
        });
    });
};

module.exports = controller;