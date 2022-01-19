const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads');
    },

    filename: (req, file, callback) => {

        const name = new Data().getTime() + path.extname(file.originalname);
        callback(null, name)
    }
});
const fileFilter = (req, file, callback) => {
    if (file.mimeType === 'image/jpeg' || file.mimeType === 'image/png') {
        callback(null, true);
    } else {
        callback(new Error('Unsupported file'), false);
    }
}


module.exports = multer({
    storage: storage,
    limits:{
        fileSize: 1024*1024*10
    },
    fileFilter: fileFilter,
})