const express = require("express");
const Actions = require("../data/helpers/actionModel.js");
const Projects = require("../data/helpers/projectModel.js");

const router = express.Router();

router.get("/", (req, res) => {
    Actions.get(req.params)
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

router.delete("/:id/:actionid", (req, res) => {
    Projects.getProjectActions(req.params.id)
    .then(actions => {
        Actions.remove(req.params.actionid)
        .then(deletedAction => {
            res.status(200).json(deletedAction)
        })
    })
    
})

module.exports = router;
