import { MongoClient } from "mongodb";

export async function checkMongoConnection() {
    let client: MongoClient | null = null;
    try{
        client = await new MongoClient("mongodb://localhost:27017").connect();
        console.log("Connected to MongoDB")
        // console.log(client)
        // const dbName = 'pragya'
        // const db = client.db(dbName);
        // await db.command({ ping: 1 });
        // console.log(`Database '${dbName}' created successfully`);
        // await db.createCollection('users');
        // console.log(`Users collection created in '${dbName}'`);
        // const databasesList = await client.db().admin().listDatabases();
        // console.log("Databases:");
        // databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        if (client){
            await client.close();
        }
    }
}