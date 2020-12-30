import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/route.js";
import mongodbURI from './config.js'
const app = express();

//using json data format
app.use(bodyParser.json(true));

mongoose
    .connect( mongodbURI,
        { useNewUrlParser: true,  useUnifiedTopology: true }
    )
    .then(() => {
        app.listen(3000, () =>
            console.log("listening on http://localhost:3000")
        );
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use("/user", router);

export default mongoose
