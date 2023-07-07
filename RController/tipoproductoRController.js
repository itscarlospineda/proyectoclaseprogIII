const controller = {};

//Listar registros
controller.list = (req, res) => {
const estado='Activo';
const idtpprod=req.body.idtpprod;
    req.getConnection((error,conn) =>{
        conn.query('select * from tipoproducto where estado=? and idtpprod=? order by 1 desc',[estado,idtpprod],
        (err,tipoproducto) =>{
            if(err){
                res.json(tipoproducto);
            }
        });
    });
};

module.exports = controller;