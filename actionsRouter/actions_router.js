const express = require("express");
const Actions = require("../data/helpers/actionModel.js");
const Projects = require("../data/helpers/projectModel.js");

const router = express.Router();

router.get("/", (req, res) => {
    Actions.get(req.params.actions)
    .then(actions => {
        res.status(200).json(actions)
    })
}) //this one seems redundant because of getProjectActions

// posts a new action to the specified project
router.post("/", (req, res) => {
    const projectId = req.params.id;
    Projects.get(projectId)
    .then(project => {
            Actions.insert(req.body)
            .then(newAction => {
                    res.status(200).json(newAction)
            })
            .catch(error => {
                console.log(error)
                res.status(500).json(error)
            })
        
    })
}) //working

//deletes specified projects specified action
router.delete("/:id/:actionid", (req, res) => {
    Projects.getProjectActions(req.params.id)
    .then(actions => {
        Actions.remove(req.params.actionid)
        .then(deletedAction => {
            res.status(200).json(deletedAction)
        })
    })
    
}) //working

//updates specified projects specified action
router.put("/:id/:actionid", (req, res) => {
    Projects.getProjectActions(req.params.id)
    .then(actions => {
        Actions.update(req.params.actionid, req.body)
        .then(updatedAction => {
            res.status(200).json(updatedAction)
        })
    })
}) //working

module.exports = router;
