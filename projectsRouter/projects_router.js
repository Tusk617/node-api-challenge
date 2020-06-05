const express = require("express");
const Projects = require("../data/helpers/projectModel.js");

const router = express.Router();

router.get("/", (req, res) => {
    Projects.get(req.query)
    .then(projects => {
        res.status(200).json(projects)
    })
})


module.exports = router;