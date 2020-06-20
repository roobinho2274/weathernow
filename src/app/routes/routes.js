module.exports = (app) =>{
    app.get('/', function (res, resp) {
        resp.send('<html><h1>Start app</h1></html>');
    });

}