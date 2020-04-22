"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get("/label", function (req, res) {
    res.send("Hello World");
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running in http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map