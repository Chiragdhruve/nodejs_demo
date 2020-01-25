const create = (data, cb) => {
    debugger
    global.mongoCon.db('interview').collection('product').insertOne(data, (err, result) => {
        if (err) {
            return cb(err);
        }
        console.log(result.ops)

        cb(null, result.ops);
    })
}

const getAll = (data,cb) => {
    global.mongoCon.db('interview').collection('product').find(data).toArray((err, result) => {
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