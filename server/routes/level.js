const express = require("express");

const Model = require("../models/level");
const Dev = require("../models/dev");
const router = express.Router();

//Post Method
router.post("/level/post", async (req, res) => {
  const data = new Model({
    level: req.body.level,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/levels", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/level/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/level/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete by ID Method
router.delete("/level/delete/:id", async (req, res) => {
  if (await Dev.findOne({ nivel: req.params.id })) {
    res
      .status(501)
      .json({ message: "impossivel deletar nivel utilizada por dev" });
  } else {
    try {
      const id = req.params.id;
      const data = await Model.findByIdAndDelete(id);
      console.log(data);
      res.send(`Document with ${data.level} has been deleted..`);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
});

module.exports = router;
