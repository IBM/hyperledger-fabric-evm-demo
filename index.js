import compression from "compression";
import express from "express";
import request from "request";
import fs from "fs";
import path from "path";

const app = express();
const port = process.env.PORT || 8080;
app.use(compression());
app.enable("trust proxy");

app.use(express.static("./build"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`App and API are live at http://localhost:${port}`);
});
