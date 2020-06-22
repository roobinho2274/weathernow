var mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/weather";

mongoClient.connect(url,
    function(err, conn){
        if(err) return console.log(err);
        global.db = conn.db("weather");
        console.log(global.db.collection);
    })


module.exports = global.db;