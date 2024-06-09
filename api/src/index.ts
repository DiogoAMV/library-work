import "module-alias/register";
import * as express from "express";
import UserRoutes from "./routes/user.routes";
import { AppDataSource } from "@app/datasource.config";
const app = express();
const port = 3000;

AppDataSource.initialize()
  .then(async () => {
    app.use(express.json());

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
