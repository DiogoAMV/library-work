import { Router } from "express";
import { UserController } from "../controller/UserController";

const router = Router();

router.get("/", UserController.getAll);
router.post("/", UserController.create);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;
