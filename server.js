var express = require('express');

var app = express();
var port = 3030;

var db = require('./models');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./routes/apiroutes.js')(app);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(port, function() {
        console.log('App listening on port: ' + port);
    });
});