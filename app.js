const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'))

app.listen(PORT,()=>{
    console.log(`server work on port: ${PORT} `)
})
// app.use(express.json())
// const start = async () =>{
//     try{
//         await mongoose.connect('mongodb+srv://plokohddy63:xRVrBeS8Or95XFS8@cluster0.hpizts7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//         app.listen(PORT, ()=>{
//             console.log(`Server work on port:` + PORT)
//         })
//     }catch(e){
//         console.log(e)
//     }
// }
// start()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/add_post', (req,res) =>{
    res.sendFile(path.join(__dirname, 'public', 'add_post.html'))
})



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Маршрут для обробки POST-запиту з даними форми
app.post('/add_post', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;

    // Відправити відповідь з даними назад до клієнта
    res.json({ title: title, content: content });
});