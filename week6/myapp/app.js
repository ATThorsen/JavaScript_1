const express = require('express')
const app = express()
const port = 3001
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/requied/:year/:month", (req,res)=>{
const {year, month} = req.params
    res.send({year,month})
})

app.get("/quert", (req,res)=>{
    const {year,month}=req.qurey
    res.send({year,month})
})

app.post("/postdata", (req,res)=>{
  const {fName, lName}= req.body
    res.send({fName, lName})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})