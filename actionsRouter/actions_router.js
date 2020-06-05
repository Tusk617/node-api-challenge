const express = require("express");
const Actions = require("../data/helpers/actionModel.js");
const Projects = require("../data/helpers/projectModel.js");

const router = express.Router();

router.get("/", (req, res) => {
    Actions.get(req.query)
    .then(actions => {
        res.status(200).json(actions)
    })
})

router.post("/:id", (req, res) => {
    const projectId = req.params.id;
    Projects.get(projectId)
    .then(project => {
        Actions.insert(req.body)
        .then(newAction => {
            res.status(200).json(newAction)
        })
    })
})

module.exports = router;
