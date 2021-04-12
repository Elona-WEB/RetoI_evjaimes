const client = require("../db/Mongolib");
const ObjectID = require("mongodb").ObjectID;

function Job() {
  const connection = client
    .connect()
    .then((connection) => connection.db("Jobs").collection("jobs"));
  const job = {};

  job.findAll = () => {
    return connection.then((c) => c.find({}).toArray());
  };

  job.findOne = (id) => {
    return connection.then((c) => c.findOne({ _id: ObjectID(id) }));
  };

  job.insertOne = (data) => {
    return connection.then((c) => c.insertOne(data));
  };

  job.replaceOne = (id, data) => {
    return connection.then((c) => c.replaceOne({ _id: ObjectID(id) }, data));
  };

  job.deleteOne = (id) => {
    return connection.then((c) => c.deleteOne({ _id: ObjectID(id) }));
  };

  job.findAndDelete = (id) => {
    return connection.then((c) => c.findOneAndDelete({ _id: ObjectID(id) }));
  };

  return job;
}

module.exports = Job();
