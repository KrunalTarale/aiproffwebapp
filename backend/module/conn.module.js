const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://chunkyfullthrottle:Pi%4031415@aiproffcontact.av1oibw.mongodb.net/contactusDB?retryWrites=true&w=majority';


async function connectToDatabase() {
try {
    await mongoose.connect(mongoDB);
    console.log("DB is connected to the server");
} catch (error) {
    console.error("Error connecting to the database:", error);
}
}

module.exports = connectToDatabase