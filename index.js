var express = require('express');
var bodyParser = require('body-parser');
var userCtrl = require('./userCtrl');

var app = express();

app.use(bodyParser.json());


app.get('/api/users', userCtrl.getUsers);
app.get('/api/users/:id', userCtrl.getUserById);
app.get('/api/admins', userCtrl.getListOfAdmins);
app.get('/api/nonadmins', userCtrl.getListOfNonAdmins);
app.get('/api/user_type/:type', userCtrl.getUsersByType);

app.put('/api/users/:id', userCtrl.updateUserById);

app.post('/api/users', userCtrl.addUser);

app.delete('/api/users/:id', userCtrl.deleteUserById);








app.listen(3000, console.log('boo ya'));