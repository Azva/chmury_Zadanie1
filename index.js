const express = require('express');
const port = 80;
const app = express();

const date = new Date();

app.get("/", function(req,res){
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    localdate = date.toLocaleString("pl-PL", {timeZone: tz});
    res.send(`Adres klienta: ${req.ip}, lokalny czas: ${localdate}`)
});

const message = date.toLocaleString("pl-PL", {timeZone: "Europe/Warsaw"}) 
        + " Magdalena Skrzypiec, port: " + port 
app.listen(port, () => console.log(message));
