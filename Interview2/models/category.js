const create = (data, cb) => {
    global.mongoCon.db('interview').collection('category').insertOne(data, (err, result) => {
        if (err) {
            return cb(err);
        }
    console.log("data",data)
        cb(null,result.ops);
    })
}

const getAll = (data,cb) => {
    global.mongoCon.db('interview').collection('category').find(data).toArray((err, result) => {
        if (err) {
            return cb(err);
        }
        cb(null, result);
    })
}



module.exports = {
    create: create,
    getAll: getAll
}