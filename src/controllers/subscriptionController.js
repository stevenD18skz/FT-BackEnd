import { subscriptionsData } from "../models/mockData.mjs";
import Subscription from "../models/Subscription.js";

export const getSubscriptions = (req, res) => {
  res.json(subscriptionsData);
};

export const createSubscription = (req, res) => {
  const newSubscription = new Subscription(req.body);
  subscriptionsData.push(newSubscription);
  res.status(201).json(newSubscription);
};
