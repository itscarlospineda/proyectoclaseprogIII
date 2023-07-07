const controller = {};

//Listar registros
controller.list = (req, res) => {
const estado='Activo';
const idtpusuario=req.body.idtpusuario;
    req.getConnection((error,conn) =>{
        conn.query('select * from tipousuario where estado=? and idtpusuario=? order by 1 desc',
        [estado,idtpusuario], (err,tipousuario) =>{
            if(err){
                res.json(tipousuario);
            }
        });
    });
};

module.exports = controller;