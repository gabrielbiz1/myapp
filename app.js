const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();



const view = path.join(__dirname, 'src/views/');


router.get('/', function (req, res) {
  res.sendFile(view + 'index.html');
  //__dirname : It will resolve to your project folder.
});


router.get('/login', function (req, res) {
  res.sendFile(view + 'login.html');
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);

app.listen(8080, () => {
  console.log(`http://localhost:8080/`)
  console.log('Server is running on port 8080')
  console.log('Press CTRL + C to stop server')
  console.log(view)
})