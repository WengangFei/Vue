const express = require('express');
const app = express();
app.use(express.json());

//receive the post from sign in
app.post('*',async (req,res)=>{
    console.log('Post request received.')
})

app.get('*',(req,res)=>{
    console.log('Get request received.')
})

app.listen('8080',()=>{
    console.log('Server is running and listening at PORT 8080');
})