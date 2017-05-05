const express = require("express");

const router = express.Router();

router.get("/", (req, res) => 
{
    res.send({"status": "ok"});
}).post("/", (req, res) => 
{
    res.send({"status": "post"});
}).put("/", (req, res) => 
{
    res.send({"status": "put"});
}).delete("/", (req, res) => 
{
    res.send({"status": "delete"});
});


module.exports = router;
