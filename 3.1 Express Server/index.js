import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1> HELLOW WORLDDD");
});
app.get ("/about" , (req,res)=> {
res.send("Hi, I'm a newbie");
});


app.get("/contacts", (req,res) => {
    res.send("Im depressed introvert");
});
app.listen(port, ()=> {
    console.log("Server has started");
}
)