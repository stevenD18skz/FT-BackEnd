import express from "express";
import { getTransactions, createTransaction } from "../controllers/transactionController.js";

const router = express.Router();

router.get("/transactions", getTransactions);
router.post("/transactions", createTransaction);

export default router;
