const LogDao = require('../infra/log-dao');
const db = require('../../../db');
module.exports = (app) =>{

    app.get('/', function (res, resp) {
       
        const logDao = new LogDao(db); 
        logDao.findlog()
            .then(log => resp.marko(
                require('../views/home.marko'),
                {
                    log: doc
                }
            ))
            .catch(error => console.log(error));
 
    });
};