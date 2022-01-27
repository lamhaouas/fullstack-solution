const http = require('http');
const app = require('./app');
const dbconnection = require('./config/db')

//db connection
try {
    dbconnection.authenticate();
    console.log('Connected to db');
} catch (error) {
    console.error('Unable to connect to db:', error);
}
const port = 3001

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})