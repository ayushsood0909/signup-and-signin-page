const express=require('express');
const app=express();
const port=8000;

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log('Error',err);
    }
    console.log('Server is running on port :${port}');
})
app.use('/',require('./routes'));