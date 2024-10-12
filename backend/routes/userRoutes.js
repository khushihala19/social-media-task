const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');
const multer = require('multer');

const router = express.Router();

// File upload setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

router.post('/', upload.array('images', 10), createUser);
router.get('/', getUsers);

module.exports = router;
