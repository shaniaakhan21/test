const express = require("express");
const router = express.Router();
const User = require("../models/user");

const app = express();

// Get all users
router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(500).send(err);
    res.render("index", { users: users });
  });
});

// Add a new user
router.post("/", (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.status(500).send(err);
    res.redirect("/");
  });
});

// Edit a user
router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if (err) return res.status(500).send(err);
    res.redirect("/");
  });
});

// Delete a user
router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(500).send(err);
    res.redirect("/");
  });
});

app.get('/', (req, res) => {
  const data = {
    users: [
      { _id: '1', name: 'John', address: '123 Main St', phone: '555-555-1212' },
      { _id: '2', name: 'Jane', address: '456 Market Ave', phone: '555-555-1212' },
      // ...
    ]
  };
  res.render('index', data);
});


module.exports = router;
