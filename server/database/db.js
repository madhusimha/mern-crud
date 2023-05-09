import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-hgfgyom-shard-00-00.owtd4wn.mongodb.net:27017,ac-hgfgyom-shard-00-01.owtd4wn.mongodb.net:27017,ac-hgfgyom-shard-00-02.owtd4wn.mongodb.net:27017/PERSONAL?ssl=true&replicaSet=atlas-vh7q0j-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
      await  mongoose.connect(URL , {useUnifiedTopology : true, useNewUrlParser: true});
      console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;