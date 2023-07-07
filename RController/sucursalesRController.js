const controller = {};

//Listar registros
controller.list = (req, res) => {
const estado='Activo';
const idsuc=req.body.idsuc;
    req.getConnection((error,conn) =>{
        conn.query('select * from sucursales where estado=? and idsuc=? order by 1 desc',[estado,idsuc],
        (err,sucursales) =>{
            if(err){
                res.json(sucursales);
            }
        });
    });
};

module.exports = controller;