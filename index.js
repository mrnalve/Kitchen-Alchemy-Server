const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())

// get chef data
const chefsInfo = require('./data/chefInfo.json')
app.get('/chefs', (req,res)=>{
    res.send(chefsInfo)
})
app.get('/chefs/:id',(req, res)=>{
    const id = req.params.id
    const selectedChef = chefsInfo.find(chef => chef.id == id)
    res.send(selectedChef)
})

app.listen(port, ()=>{
    console.log('dragon api running');
})

