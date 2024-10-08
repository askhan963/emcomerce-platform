const mongoose = require('mongoose');


const connectDB = async () => {
  try {
  //  const conn = await mongoose.connect('mongodb://awaiskhan963:awaiskhanniazi@ac-ymeczwc-shard-00-00.jhki4ct.mongodb.net:27017,ac-ymeczwc-shard-00-01.jhki4ct.mongodb.net:27017,ac-ymeczwc-shard-00-02.jhki4ct.mongodb.net:27017/mydatabase?ssl=true&replicaSet=atlas-13au00-shard-0&authSource=admin&retryWrites=true&w=majority', {
   const conn = await mongoose.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected', conn.connection.host);
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
