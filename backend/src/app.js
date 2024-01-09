const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path'); 
const app = express();

app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        // Keep the original file extension
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post('/upload',upload.single('stuff'), function (req, res) {
    // 'file' is saved to 'uploads/' folder
    res.send('File uploaded successfully.');
});

app.listen(3000, () => console.log('Server started on port 3000'));
