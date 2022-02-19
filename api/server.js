const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")

const cors = require("cors")
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors())

app.use(express.json());
const URL = "mongodb+srv://jainakshat:taradevi123@cluster0.clemf.mongodb.net/blog?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGODB_URI || URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("connected to database."))
.catch((err) => console.log(err));


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts",postRoute)
app.use("/api/categories",categoryRoute)


app.listen(PORT, ()=>{
    console.log("Backend is running.");
})