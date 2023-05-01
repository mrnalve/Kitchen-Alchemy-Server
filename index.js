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

app.listen(port, ()=>{
    console.log('dragon api running');
})

/*
<img src="https://i.ibb.co/dgLnD5T/Jo-l-Robuchon.jpg" alt="Jo-l-Robuchon" border="0">
<img src="https://i.ibb.co/NxCKYDn/Yannick-All-no.jpg" alt="Yannick-All-no" border="0">
<img src="https://i.ibb.co/X3WYWKk/Alain-Passard.jpg" alt="Alain-Passard" border="0">
<img src="https://i.ibb.co/LndyrQL/Anne-Sophie-Pic.jpg" alt="Anne-Sophie-Pic" border="0">
<img src="https://i.ibb.co/VNXLzjB/Guy-Savoy.jpg" alt="Guy-Savoy" border="0">
<img src="https://i.ibb.co/M5JTd69/H-l-ne-Darroze.jpg" alt="H-l-ne-Darroze" border="0">
*/ 