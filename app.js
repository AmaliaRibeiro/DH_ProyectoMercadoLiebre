const express  = require ('express');
const path = require ('path');
const app = express ();
const publicPath = path.resolve(__dirname,"public")
app.use(express.static(publicPath));

app.listen(3000, () => console.log('servidor corriendo'));

app.get ('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/home.html'));
});