import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, (red, res) => {
    console.log("server started!")
}
);

app.get("/test", (req, response) => {
    console.log("Someone made a get request with the 'test' endpoint")
    res.send("Hi there! this is the server speaking.");
});