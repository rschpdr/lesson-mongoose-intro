const mongoose = require("mongoose");

// Immediately Invoked Function Expression - IIFE
(async function connectToDb() {
  try {
    const response = await mongoose.connect(
      "mongodb://localhost/cats-app-dev",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(
      `Connected to Mongo! Database name: ${response.connections[0].name}`
    );
  } catch (err) {
    console.error(err);
  }
})();
