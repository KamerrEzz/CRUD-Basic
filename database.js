const mongoose = require("mongoose");
const { db_user, db_password, db_host, db_name } = require("./config");

let user = encodeURIComponent(db_user);
let password = encodeURIComponent(db_password);

let URI = `mongodb+srv://${user}:${password}@${db_host}/${db_name}?retryWrites=true&w=majority`;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db connect"))
  .catch((err) => console.log(err));

module.exports = mongoose;
