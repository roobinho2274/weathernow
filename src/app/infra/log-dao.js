class LogDao {

    constructor(db) {
        this._db = db;
    }

    findlog(){
        return new Promise(
            (resolve, reject)=>{
                this._db.collection("log").find().toArray(
                    (err, doc) =>{
                    if (err) return reject ("Não foi possível retornar os dados!")
                    
                    return resolve(doc)
                })
            }
        );
    }
    // findLog(callback) {
    //     this._db.collection("log").find().toArray(function (err, doc) {
    //         if (err) return console.log(err);
    //         callback(doc);
    //     })
    // }

    findFirst(callback) {
        this._db.collection("log").find().sort({ _id: 1 }).toArray(function (err, doc) {
            if (err) return console.log(err);
            callback(doc);
        })
    }
    saveLog(city, callback) {
        this._db.collection("log").insert({ city }, function (err, result) {
            if (err) return console.log(err);
            callback();
        })
    }
}

module.exports = LogDao;
