import * as express from "express";
import { AppDataSource } from "./data-source";
import UserRoutes from "./routes/UserRoutes";
const app = express();
const port = 3000;

AppDataSource.initialize()
  .then(async () => {
    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.use("/users", UserRoutes);

    app.listen(port, () => {
      console.log(`🔥 Server running on localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(JSON.stringify(error, null, 2));
    console.log("❌ Unable to connect to the database.");
  });
