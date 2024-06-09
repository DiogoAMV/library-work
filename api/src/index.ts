import * as express from "express";
import { AppDataSource } from "./data-source";
import { Users } from "./entity/User";
const app = express();
const port = 3000;

AppDataSource.initialize()
  .then(async () => {
    // console.log("Inserting a new user into the database...");
    // const user = new Users();
    // user.username = "Diogao da massa ";
    // user.password_hash = "Vapoooooooooo";
    // user.created_at = new Date();
    // user.email = "diogo@gmail.com";
    // await AppDataSource.manager.save(user);
    // console.log("Saved a new user with id: " + user.user_id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(Users);
    console.log("Loaded users: ");
    console.log(JSON.stringify(users, null, 2));

    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.listen(port, () => {
      console.log(`🔥 Server running on localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("❌ Unable to initialize api.");
  });
