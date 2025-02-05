import Transaction from "../models/Transaction.js";

const transactions = [
  { id: 1, amount: 100, description: "Groceries" },
  { id: 2, amount: 50, description: "Transport" },
];

export const getTransactions = (req, res) => {
  res.json(transactions);
};

export const createTransaction = (req, res) => {
  const newTransaction = new Transaction(req.body);
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
};
