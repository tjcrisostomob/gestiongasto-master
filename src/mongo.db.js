const mongoose = require('mongoose');
const mongodb_conn = process.env.mongodb_conn || '';
async function connect() {
    try {
        await mongoose.connect(mongodb_conn, {
            dbName: process.env.mongodb_name,
            ssl: false,
            directConnection: true,
            readPreference: "primary",
            replicaSet: "rs0",
            authSource: "admin"
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.log('MongoDB connection error: ' + err);
    }
}
module.exports = connect;