const express = require('express');
const router = express.Router();
const signupTemplateCopy = require('../models/signUpModels');
router.post('/signup', (req, res) => {
  const signedUpUser = new signupTemplateCopy({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  signedUpUser
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
