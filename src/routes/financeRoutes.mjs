// src/routes/financeRoutes.js
import express from "express";
import {
  getTransactions,
  addTransaction,
  getPlanningGoals,
  getByIdPlanningGoal,
  addPlanningGoal,
  updatePlanningGoal,
  deletePlanningGoal,
} from "../controllers/financeController.mjs"; // Updated import path

const router = express.Router();

router.get("/transactions", getTransactions);
router.post("/transactions", addTransaction);

router.post("/planning-goals", addPlanningGoal);
router.get("/planning-goals/:id", getByIdPlanningGoal);
router.get("/planning-goals", getPlanningGoals);
router.patch("/planning-goals/:id", updatePlanningGoal);
router.delete("/planning-goals/:id", deletePlanningGoal);

export default router;
