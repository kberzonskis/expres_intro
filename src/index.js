
import express from 'express'; 
const app = express()
const port = 3200; 


app.get('/', (req, res) => {
  
  res.send('Home content!')
 
  
});


app.get('/about', (req, res) => {
  console.log('about');
  
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>
   <h1>SVEIKI DRAUGAI</h1> 
    <p>Šis yra paprastas HTML dokumentas.</p>
</body>
</body>
</body>
</html>`)
});


app.get('/*error', (req, res) => {
  console.log('404 error');
  
  res.send('page not found 404 error')
});






app.listen(port, () => {


  console.log(`serveris work in http://localhost:${port}`)

}); 