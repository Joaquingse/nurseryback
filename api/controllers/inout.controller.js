const Drop = require("../models/drop.model");
const Pick = require("../models/pick.model");

function dropOff(req, res) {
  Drop.create(req.body)
    .then((dropoff) => res.json(dropoff))
    .catch((err) => res.json(err));
}

function pickUp(req, res) {
  Pick.create(req.body)
    .then((pick) => res.json(pick))
    .catch((err) => res.json(err));
}

function getDrops(req, res) {
  Drop.find(req.query)
    .populate("child who")
    .then((drops) => res.json(drops))
    .catch((err) => res.json(err));
}

/* fx para sacar los drops de un niño (se queda en sby)

function getChildDrops(req, res) {
  Drop.findById(req.params.id)
    .then((drops) => res.json(drops))
    .catch((err) => res.json(err));
}
 */

function getPicks(req, res) {
  Pick.find(req.query)
    .populate("child who")
    .then((picks) => res.json(picks))
    .catch((err) => res.json(err));
}

function editDrop(req, res) {
  Drop.findByIdAndUpdate(req.params.id)
    .then((dropoff) => res.json(dropoff))
    .catch((err) => res.json(err));
}

function editPick(req, res) {
  Pick.findByIdAndUpdate(req.params.id)
    .then((pick) => res.json(pick))
    .catch((err) => res.json(err));
}

function deleteDrop(req, res) {
  Drop.findByIdAndDelete(req.params.id)
    .then((dropoff) => res.json(dropoff))
    .catch((err) => res.json(err));
}

function deletePick(req, res) {
  Pick.findByIdAndDelete(req.params.id)
    .then((pick) => res.json(pick))
    .catch((err) => res.json(err));
}

module.exports = {
  dropOff,
  pickUp,
  getDrops,
  getPicks,
  editDrop,
  editPick,
  deleteDrop,
  deletePick,
};
