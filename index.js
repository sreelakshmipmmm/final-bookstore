const port=4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

app.use(express.json());
app.use(cors());

//database connection with mongodb
mongoose.connect('mongodb+srv://sreelakshmimanoj432:abcd1234@cluster0.gwgri.mongodb.net/') 

//API creation

app.get("/", (req, res) => {
    res.send("express app is running");
});

//image storage engine
const storage= multer.diskStorage({
    destination: './uploads/images',
    filename: function(req, file, cb){
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});


const upload = multer({storage: storage});

//creating upload endpoint
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({ 
        success:1,
        image_url:'http://localhost:${port}/images/${req.file.filename}' });
    })

    

app.listen(port, (error) => {
    if(error){
        console.log('Server is running on port ' + port);
    }
    else{
        console.log('error' + error);
    }
})