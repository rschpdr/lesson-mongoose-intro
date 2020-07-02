const Cat = require("./models/Cat.model");

require("./configs/database.config");

// CRUD

(async function startApp() {
  try {
    // Create
    const resultCreate = await Cat.create({
      name: "Tom",
      age: 8,
      color: "gray",
    });
    console.log("Cat created!", resultCreate);

    // const result = await Cat.create([
    //   { name: "Tom", age: 8, color: "gray" },
    //   { name: "Garfield", age: 17, color: "orange" },
    //   { name: "Frajola", age: 30, color: "black" },
    // ]);
    // console.log("Created many cats!", result);

    // Read
    // const result = await Cat.findById("5efe1ade1f790230231d4b74");
    // console.log("Found a cat!", result);

    // const result = await Cat.find();
    // console.log("Found all cats!", result);

    const resultRead = await Cat.find({ age: { $gt: 8 } });
    console.log("Found older cats!", resultRead);

    // Update
    // const result = await Cat.findByIdAndUpdate("5efe1ade1f790230231d4b74", {
    //   $set: { numberOfLegs: 4, breed: "persian" },
    // });
    // console.log("Updated a cat!", result);

    // const result = await Cat.updateMany(
    //   { age: { $gt: 8 } },
    //   { toys: ["Yarn ball"] }
    // );
    // console.log("Updated many cats!", result);

    const resultUpdate = await Cat.updateOne(
      { _id: "5efe1ade1f790230231d4b74" },
      { $push: { toys: "Yarn Ball" } }
    );
    console.log("Updated a single cat!", resultUpdate);

    // Delete
    // const result = await Cat.findByIdAndDelete("5efe1ade1f790230231d4b74");
    // console.log("Deleted a cat!", result);

    const resultDel = await Cat.deleteOne({ name: "Garfield" });
    console.log("Deleted a single cat!", resultDel);

    // const result = await Cat.deleteMany();
    // console.log("Deleted many cats!", result);
  } catch (err) {
    console.error(err);
  }
})();
