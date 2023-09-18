const path = require('path');

const uploadFile = (req, res) => {
    try {
        // Aqui validamos que haya archivo
        if (!req.files || !req.files.archivo) {
            return res.status(400).json({
                msg: 'No se ha subido ningún archivo o el campo "archivo" está vacío.'
            });
        }

        const archivoCargado = req.files.archivo; // 'archivo' debe coincidir con el campo del formulario

        // Mueve el archivo cargado al directorio 'uploads'
        archivoCargado.mv(path.join(__dirname, '../uploads', archivoCargado.name), (err) => {
            if (err) {
                return res.status(500).json({
                    msg: err
                })
            }

            res.status(200).json({
                msg: 'Archivo cargado con éxito.'
            })
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'No se ha podido Cargar el archivo'
        })
    }
};

module.exports = {
    uploadFile,
};