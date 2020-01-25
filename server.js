const mongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/interview_db";
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./routes/controller');
//const config = require('./config');
const multer = require('multer');
const path = require('path');
mongoClient.connect(uri, function(err,db)
{
    if(err) throw err;
    console.log('mongodb conected');
    global.mongoCon = db;

});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("file...........................", file);
        let dirPath = path.join(__dirname, '/images');
        cb(null, dirPath);
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    }
});

const upload = multer({
    storage: storage
});

const app =express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(upload.array('file'))

app.use('/', controller);
app.listen(3000, () => console.log('Express is running on port 3000'));

