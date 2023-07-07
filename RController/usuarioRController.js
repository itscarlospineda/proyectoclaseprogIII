const controller = {};

//Listar registros
controller.list = (req, res) => {
const estado='Activo';
const userid=req.body.userid;
    req.getConnection((error,conn) =>{
        conn.query('select * from usuario where estado=? and userid=? order by 1 desc',[estado,userid], 
        (err,usuario) =>{
            if(err){
                res.json(usuario);
            }
        });
    });
};

module.exports = controller;