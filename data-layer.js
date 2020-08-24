const {
    MONGO_URI,
    MONG_DB,
} = require('./config');

const MongoClient = require('mongodb').MongoClient;

const init = async (collectionName) => {
    try {
        const client = await MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).connect();

        collection = client.db(MONG_DB).collection(collectionName);

        const create = async (data) => {
            const results = await collection.insertMany(data);
            client.close();
            return results;
        };
    
        return {
            create,
        };

    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    init,
};