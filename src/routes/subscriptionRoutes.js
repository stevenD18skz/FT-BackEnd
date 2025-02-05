import express from "express";
import {
  getSubscriptions,
  createSubscription,
} from "../controllers/subscriptionController.js";

const router = express.Router();

router.get("/subscriptions", getSubscriptions);
router.post("/subscriptions", createSubscription);

export default router;
