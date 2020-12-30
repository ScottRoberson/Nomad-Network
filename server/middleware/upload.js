const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../upload/postImage'));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/[\/\\:]/g, '_') + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  //reject file
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/gif'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
