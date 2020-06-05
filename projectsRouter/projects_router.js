const express = require("express");
const Projects = require("../data/helpers/projectModel.js");

const router = express.Router();

router.get("/", (req, res) => {
    Projects.get(req.parms)
    .then(projects => {
        res.status(200).json(projects)
    })
})

router.get("/:id", (req, res) => {
    Projects.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
})

router.post("/", (req, res) => {
    Projects.insert(req.body)
    .then(newPost => {
        res.status(200).json(newPost)
    })
})


module.exports = router;