import Subscription from "../models/Subscription.js";

const subscriptions = [
  { id: 1, name: "Spotify", cost: 9.99 },
  { id: 2, name: "Netflix", cost: 12.99 },
];

export const getSubscriptions = (req, res) => {
  res.json(subscriptions);
};

export const createSubscription = (req, res) => {
  const newSubscription = new Subscription(req.body);
  subscriptions.push(newSubscription);
  res.status(201).json(newSubscription);
};
