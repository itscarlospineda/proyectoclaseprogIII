const controller = {};

//Listar registros
controller.list = (req, res) => {
const estado='Activo';
const idempresa=req.body.idempresa;
    req.getConnection((error,conn) =>{
        conn.query('select * from empresa where estado=? and idempresa=? order by 1 desc',[estado,idempresa],
        (err,empresa) =>{
            if(err){
                res.json(empresa);
            }
        });
    });
};

module.exports = controller;