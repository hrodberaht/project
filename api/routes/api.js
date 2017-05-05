const express = require("express");

const router = express.Router();

router.get("/", (req, res) => 
{
    res.send({"status": "ok"});
}).post("/", (req, res) => 
{
    res.send({"status": "post"});
});


module.exports = router;
