import Wallet from "../models/Wallet.js";

const wallets = [
  { id: 1, name: "Main Wallet", balance: 5000 },
  { id: 2, name: "Savings Wallet", balance: 15000 },
];

export const getWallets = (req, res) => {
  res.json(wallets);
};

export const createWallet = (req, res) => {
  const newWallet = new Wallet(req.body);
  wallets.push(newWallet);
  res.status(201).json(newWallet);
};
