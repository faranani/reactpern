
const Pool= require("pg").Pool;

const pool= new Pool({

    user :"postgres",
    password :"Faranani20?",
    host :"localhost",
    port :5433,
    database :"perntodo"

})

module.exports = Pool