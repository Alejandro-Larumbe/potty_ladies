const router = require('express-promise-router')()

router.get("/", (req, res) => {
  res.send("Hello World")
  // res.redirect("/")
})

module.exports = { router }
