const express = require("express");
const path = require("path");

const app = express();

app.use('/public', express.static(path.join(__dirname, '../public')));


app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/index.html'));
});


app.listen(process.env.PORT, () => console.log('Server start'));
