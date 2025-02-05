import express from "express";
import { getWallets, createWallet } from "../controllers/walletController.js";

const router = express.Router();

router.get("/wallets", getWallets);
router.post("/wallets", createWallet);

export default router;
