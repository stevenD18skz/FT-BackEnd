// src/models/Transaction.js
export default class Transaction {
  constructor(id, description, amount, date) {
    this.id = id;
    this.description = description;
    this.amount = amount;
    this.date = date;
  }
}

