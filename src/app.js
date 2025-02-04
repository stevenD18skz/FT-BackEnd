// src/app.js
import express, { json } from "express"; // require -> commonJS
import { corsMiddleware } from "./middlewares/cors.js";
import cors from "cors";
import router from "./routes/financeRoutes.mjs";

const app = express();
app.use(json());
app.use(corsMiddleware());
app.disable("x-powered-by");

app.use("/api", router);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
