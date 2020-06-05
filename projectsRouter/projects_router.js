const express = require("express");
const Projects = require("../data/helpers/projectModel.js");

const router = express.Router();

router.get("/", (req, res) => {
    Projects.get(req.parms)
    .then(projects => {
        res.status(200).json(projects)
    })
}) //working

router.get("/:id", (req, res) => {
    Projects.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
}) //working

router.post("/", (req, res) => {
    Projects.insert(req.body)
    .then(newPost => {
        res.status(200).json(newPost)
    })
}) //working

router.delete("/:id", (req, res) => {
    const postId = req.params.id
    Projects.get(postId)
    .then(project => {
        Projects.remove(postId)
    .then(deletedProject => {
        res.status(202).json(`Number of deleted projects: ${deletedProject}`)
    })
    })
}) //working


module.exports = router;