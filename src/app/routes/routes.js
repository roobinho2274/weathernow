module.exports = (app) =>{
    app.get('/', function (res, resp) {
        resp.marko(require('../views/home.marko'));
    });
};