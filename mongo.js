const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give passowrd as argument");
  process.exit();
}

const password = process.argv[2];

const url = `mongodb+srv://admin:${password}@cluster0.td7qsvs.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//   content: "GET and POST are the most important methods of HTTP protocol",
//   important: true,
// });

// note.save().then((result) => {
//   console.log("note saved");
//   mongoose.connection.close();
// });

Note.find({ important: true }).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
