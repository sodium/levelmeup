var level = require('level');
var net = require('net');
var multilevel = require('multilevel');

var db = level(__dirname + '/db');

net.createServer(function(con) {
  con.pipe(multilevel.server(db)).pipe(con);
});
<<<<<<< HEAD

db.put('the holy secret', 'the solution is *you*');
=======
>>>>>>> 34f3b28... added multilevel problem
