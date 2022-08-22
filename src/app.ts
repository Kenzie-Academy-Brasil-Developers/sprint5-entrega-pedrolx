import "dotenv/config";
import express from "express";
import userRoutes from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

export default app;
