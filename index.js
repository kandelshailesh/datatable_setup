const express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var MySQLEvents = require('mysql-events');
var deferred = require('deferred');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const path= require('path');
const app = express();
var cors= require('cors');
var db= require('./db');
let {
    Editor,
    Field,
    Validate,
    Format,
    Options
} = require('datatables.net-editor-server');

// reload(app);
app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public/')));

app.get('/index',(req,res)=>
{
    res.render('index');
})
app.all('/api/staff', async function(req, res) {
    console.log(req.body);
    let editor = new Editor(db, 'table 4','id')
        .fields(
            new Field( 'first_name' ),
            new Field( 'last_name' ),
            new Field( 'position' ),
            new Field( 'office' ),
            new Field( 'start_date',
            new Field( 'salary' )
             )

        );

         
 try
 {
    await editor.process(req.body);
    res.json( editor.data() );

 }
 catch(e)
 {
     console.log("hkkj");
 }
})


app.listen(4005,()=>console.log("Connected on port 4005"));
