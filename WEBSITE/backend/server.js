import "dotenv/config";
import express from "express";
import cors from "cors";

import bellRoutes from "./routes/bell.js";
import chatRoutes from "./routes/chat.js";
import directionRoutes from "./routes/direction.js";
import mapsRoutes from "./routes/maps.js";
import medicinesRoutes from "./routes/medicines.js";
import productsRoutes from "./routes/products.js"; // NEW

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "*",
  })
);

app.use(express.json());

app.use("/api/bell", bellRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/direction", directionRoutes);
app.use("/api/maps", mapsRoutes);
app.use("/api/medicines", medicinesRoutes);
app.use("/api/products", productsRoutes); // NEW

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
