const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, deleteButton, postImg, edit} = require('./controller')

app.get("/api/compliment", getCompliment);
app.delete("/api/compliment/:id", deleteButton)
app.post("/api/compliment/", postImg)
app.put('/api/compliment/', edit)

app.listen(4000, () => console.log("Server running on 4000"));
