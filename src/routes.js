const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { project_name: app_name });
});

module.exports = router;
