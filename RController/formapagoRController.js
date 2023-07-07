const controller = {};

//Listar registros
controller.list = (req, res) => {
const estado='Activo';
const idfpago=req.body.idfpago;
    req.getConnection((error,conn) =>{
        conn.query('select * from formapago where estado=? and idfpago=? order by 1 desc',[estado,idfpago],
        (err,formapago) =>{
            if(err){
                res.json(formapago);
            }
        });
    });
};

module.exports = controller;