const express = require("express");
const router = express.Router();
const hrController = require("../controllers/HREmployeeController");

//list
router.get("/get-employees", hrController.getListEmployee);
router.get("/test", hrController.getListEmployeeTest);

//detail
router.get("/get-employee/:employeeId", hrController.detailEmployee);

//create
router.post("/create-employee", hrController.createEmployee);

//delete
router.delete("/delete-employee", hrController.deleteEmployee);

//update
router.patch("/update-employee", hrController.updateEmployee);

//list
router.get("/benefit-plans", hrController.getListBenefitPlans);

//statistic benefit plan
router.get("/statistic-benefit-plan", hrController.statisticsBenefitPlan);

module.exports = router;
