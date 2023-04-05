const express = require('express')
const app = express();
const cors= require('cors');
const pool = require('./db');

//meddlerawe 

app.use(cors());

app.use(express.json());

// routes//

// create todo

app.post("/todo", async (req, res)=>{

    try {
    //   respond =  res.send(req.body);

    //     console.log(respond);

        const{descriptions}= req.body;

        const newtodo= await pool.query("INSERT INTO todo (descriptions) VALUES($1)",
        [descriptions]
        );

        res.json(newtodo);

        // console.log(newtodo);

    // console.log(req.body);
    } catch (err) {

        console.error(err.message);
        
    }

});



// get all to do

// get a to do

// update 

// delete a to do




app.listen(5000, () => {

    console.log("listening on port  5000");
})