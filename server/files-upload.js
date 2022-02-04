const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads');
    },

    filename: (req, file, callback) => {
       
        callback(null, `${file.fieldname}_${+new Date()}.jpg` )
    }
});


module.exports = multer({
    storage: storage
}).single('multimediaUrl');