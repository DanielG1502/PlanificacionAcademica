var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : '',
  database : 'planificacion academica'
});
 
connection.connect();

module.exports = connection;
