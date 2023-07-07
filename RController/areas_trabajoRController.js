const controller = {};

//Listar registros
controller.list = (req, res) => {
const estado='Activo';
const idarea=req.body.idarea;
    req.getConnection((error,conn) =>{
        conn.query('select * from areas_trabajo where estado=? and idarea=? order by 1 desc',[estado,idarea],
        (err,areas_trabajo) =>{
            if(err){
                res.json(areas_trabajo);
            }
        });
    });
};

module.exports = controller;