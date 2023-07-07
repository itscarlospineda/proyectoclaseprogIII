const controller = {};

//Listar registros
controller.list = (req, res) => {
const estado='Activo';
const num_prod=req.body.num_prod;
    req.getConnection((error,conn) =>{
        conn.query('select * from producto where estado=? and num_prod=? order by 1 desc',[estado,num_prod], 
        (err,producto) =>{
            if(err){
                res.json(producto);
            }
        });
    });
};

module.exports = controller;