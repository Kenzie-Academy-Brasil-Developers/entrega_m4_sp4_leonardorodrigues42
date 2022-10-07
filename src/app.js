import express from "express";
import { startDatabase } from "./database";
import categoriesRouter from "./routes/categories.routes";
import "dotenv/config";
import productsRouter from "./routes/products.routes";


const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter)
app.use("/products", productsRouter)

export default app.listen(3333, () => {
  console.log("Server running");
  startDatabase()
});
