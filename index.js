
import express from "express";


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello Server 5555 !");
});


app.listen(5555, () => {
    console.log("Server running in the PORT 5555 !");
});

