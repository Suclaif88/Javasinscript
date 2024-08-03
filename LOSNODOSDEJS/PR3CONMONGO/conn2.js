const { MongoClient } = require('mongodb');

async function main() {
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected correctly to server');

        const consulta = await client.db('players').collection('playersCollection').insertMany([
            { name: 'Juan Jose', age: 28 },
            { name: 'Sebastian', age: 22 }
        ]);
        
        console.log(`${consulta.insertedCount} documentos insertados!!`);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        console.log('Connection closed');
    }
}

main().catch(console.error);
