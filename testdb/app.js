const mysql=require('mysql')
let connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'m870rushb',
  database:'3d'
})
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
})