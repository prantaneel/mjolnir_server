const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
})
app.get("/documentation", (req, res) => {
    res.sendFile(path.join(__dirname,'./public/dm.html'));
})
app.get("/editor", (req, res) => {
    res.sendFile(path.join(__dirname,'./public/editor.html'));
})
app.listen(process.env.PORT || 3000, function() {
    console.log(`listening on port ${process.env.PORT || 3000}`);
})