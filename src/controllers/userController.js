import { balanceData } from "../models/mockData.mjs";

export const getUsers = (req, res) => {
  res.json(balanceData);
};
