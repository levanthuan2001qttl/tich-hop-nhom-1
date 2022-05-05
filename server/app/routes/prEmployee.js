const express = require("express");
const router = express.Router();
const prController = require("../controllers/PREmployeeController");

router.get("/get-employees", prController.getListEmployee);

router.get("/get-employee/:employeeId", prController.detailEmployee);

router.post("/create-employees", prController.create);

router.delete("/delete-employees", prController.delete);

router.patch("/update-employee", prController.update);

module.exports = router;
