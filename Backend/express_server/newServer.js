const express = require('express');
const app = express();
const mainRout = require('./controllers/mainRout');
const userRout = require('./controllers/userRout');

app.use(mainRout, userRout)

// app.use(mainRout); 
// app.use(userRout); 
// app.get(mainRout);
// app.get(userRout);



app.listen(5000, () => {
    console.log(`Example app listening on port ${5000}`)
  });

 