import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/route.js";

const app = express();

//using json data format
app.use(bodyParser.json(true));

mongoose
    .connect(
        "mongodb://jaiswalrohan:jaiswalrohan@cluster0-shard-00-00.wq1cd.mongodb.net:27017,cluster0-shard-00-01.wq1cd.mongodb.net:27017,cluster0-shard-00-02.wq1cd.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-yf9ewr-shard-0&authSource=admin&retryWrites=true&w=majority",
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
