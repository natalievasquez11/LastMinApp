var db = require('../models');

module.exports = function(app) {
    app.get('/', function(req, res) {
        console.log('a');
        db.User.findAll({}).then(function(result) {
            console.log(result);
            res.render('index', { all: result });
        });
    });

    app.get('/favorites', function(req, res) {
        console.log('b')
        db.User.findAll({
            where: {
                faves: true
            }
        }).then(function(result) {
            console.log(result);
            res.render('favorites', { faves: result });
        });
    });
            ///more-info/:id
    app.get('/more-info/:id', function(req, res) {
        console.log('c');
        db.User.findOne({
            where: {
                id: req.param.id
            }
        }).then(function(result) {
            console.log(result);
            res.render('moreInfo', { info: result });
        });
    });


};