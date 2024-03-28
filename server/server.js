import dotenv from "dotenv"

import express from "express"

const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config({ path: "server/config/config.env" });

app.get('/', (req, res) => {
    res.send('I Love You Babu')
  })

app.listen(PORT,()=>{
    console.log(`🌍 Now listening on PORT:${PORT}`);
})


console.log("chikushi"); 