import dotenv from "dotenv"

import express from "express"
import connectionDb from "./config/connection.js";
import morgan from "morgan"
import productRoute from "./routes/products.js"
import userRoute from "./routes/users.js"
import cookieParser from "cookie-parser"




//initialising express  

const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config({ path: "server/config/config.env" });





///database connection
connectionDb();
app.use(morgan('dev'))


//initial get request
// app.get('/', (req, res) => {
//     res.send('I Love You Babu')
//   })
app.use(express.json());
app.use(cookieParser());
  //routing for products
  app.use("/api",productRoute)
  app.use("/api",userRoute)




  //express Listening

app.listen(PORT,()=>{
    console.log(`🌍 Now listening on PORT:${PORT}`);
})