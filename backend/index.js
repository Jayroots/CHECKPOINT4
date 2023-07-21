const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./src/routes/qualiteEauVille.route");

dotenv.config();


const port = process.env.BACKEND_PORT;

app.get('/', (req,res)=> {
    res.send('hello world')
})






const corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.json());



app.use("/villes", router);

app.listen(port, () => {
    console.log(`Server is actually running on ${port}`)
})