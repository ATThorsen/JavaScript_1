const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://FullstackJS:Batman@cluster0.flmgs.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function mongoTest(){ 
    try{
       await client.connect()
        const dogs = client.db("Kennel")
        const dogsCollection = dogs.collection("dogs")
        await dogsCollection.insertMany([{name:"togo"}, {name:"sliver"}])
    }
    catch(err){

    }
    finally{
        client.close
    }
}

mongoTest()