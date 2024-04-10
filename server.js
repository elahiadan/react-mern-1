const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:admin123@cluster0.qu8r6xa.mongodb.net/first_db?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   serverApi: ServerApiVersion.v1,
});

///////////////     SCHEMA
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  status: Boolean,
});

const User = mongoose.model("User", userSchema);

const newsletterSchema = mongoose.Schema({
  email: String,
});

///////////////      REQUEST

app.post("/api/add-newsletter", (req, res) => {
  const addEmail = new Newsletter({
    email: req.body.email,
  });

  addEmail.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
    console.log("ADD");
    res.status(200).json(result);
  });
});

app.get("/api/get-newsletter", (req, res) => {
  Newsletter.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
    console.log("GET");
    res.status(200).json(result);
  });
});

app.post("/api/edit-newsletter", (req, res) => {
  Newsletter.findById(req.body.id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
    console.log("EDIT");
    res.status(200).json(result);
  });
});

app.post("/api/update-newsletter", (req, res) => {
  Newsletter.findById(req.body.obj.id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result.email);
      result.set({
        email: req.body.obj.email,
      });
      result.save((err, resul) => {
        if (err) console.log(err);
        // console.log(resul);
      });
    }
    console.log("UPDATE");
    res.status(200).json(result);
  });
});

app.post("/api/remove-newsletter", (req, res) => {
  Newsletter.findByIdAndRemove({ _id: req.body.id }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
    console.log("DELETE");
    res.status(200).json(result);
  });
});

const Newsletter = mongoose.model("Newsletter", newsletterSchema);

const port = process.env.PORT || 3004;
app.listen(port);
