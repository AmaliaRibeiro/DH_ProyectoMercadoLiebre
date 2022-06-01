const express = require('express');
const path = require('path'); //con este modulo se unifican las rutas para identificarlas mejor
const app = express();

app.use(express.static('public')); //se tiene la carpeta public como recurso estático para poder consumirlo
app.use(express.urlencoded({extended:false}));

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor activo en el puerto 3000');
})

app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/home.html'));
});

app.get ('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/register.html'));
});

app.get ('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/login.html'));
});