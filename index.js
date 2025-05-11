const express =  require('express');
require('dotenv').config();
const app =  express();
app.get('/',(req,res)=>{
    console.log('on landing page');
    
});


app.listen(process.env.PORT,()=>{
        console.log(`on port ${process.env.PORT}`);
        
})