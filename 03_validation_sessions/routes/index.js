var express = require("express");
var router = express.Router();
var { check, validationResult } = require("express-validator");


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Form Validation",
    success: req.session.success,
    errors: req.session.errors,
  });
  req.session.errors = null;
});

router.post("/submit", [
  check("email", "Invalid email address").isEmail(),
  check('password').isLength({ min: 4 }),
  check('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password')
    }    
    return true; 
  })   
],  function (req, res, next) {
  //Check validity
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.session.errors = errors.array();
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  res.redirect("/");
});

module.exports = router;
