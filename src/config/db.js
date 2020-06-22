const mongodb = require('mongodb');
let mongodbClient;
let db;
function dbConnect() {
    return new Promise((resolve, reject) => {
        if (db) {
            resolve(db);
        } else {
            mongodb.MongoClient.connect(appSettings.mongodb_url, function(err, client) {
                if (err) {
                    logger.error('Error connecting to the MongoDB URL: ' + appSettings.mongodb_url);
                    reject(err);
                }
                mongodbClient = client;
                db = mongodbClient.db(appSettings.mongodb_db_name);
                // Make sure connection closes when Node exits
                process.on('exit', (code) => {
                    dbClose();
                })
                resolve(db);
            });
        }
    });
}

// var mongoClient = require("mongodb").MongoClient;
// mongoClient.connect("mongodb://localhost:3000", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// })
//     .then(con =>  global.connection = con.db("weather"))
//     .catch(err => console.log("Falha na conexao${ err.message }"))

// function findCities(callback) {
//     global.collection.collection("cities").find({}).toArray(callback)    
// }

// function findSearchs() { }

// module.exports = { findCities }