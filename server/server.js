const express = require("express");
const path = require("path");
const api = require("../api/routes/api");

const app = express();

app.use('/public', express.static(path.join(__dirname, '../admin/public')));
app.use('/public', express.static(path.join(__dirname, '../client/public')));


app.get("/", (req, res) => 
{
    res.sendFile(path.join(__dirname,'../client/index.html'));
});
app.get("/admin", (req, res) => 
{
    res.sendFile(path.join(__dirname,'../admin/public/admin.html'));
});

app.get("/admin/*", (req, res) => 
{
    res.redirect("/admin");
});

app.use("/api", api);



app.listen(process.env.PORT, () => 
{
    console.log('Server start');
});
