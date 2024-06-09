import { AppDataSource } from "@app/datasource.config";
import { Users } from "@model/user.model";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";

const saltRounds = 8;

export class UserController {
  static getAll = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();
    res.json(users);
  };

  static create = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(Users);
    const hashedPassword = await bcrypt.hash(
      req.body.password_hash,
      saltRounds
    );
    const user = userRepository.create({
      ...req.body,
      password_hash: hashedPassword,
    });
    await userRepository.save(user);
    res.json(200);
  };

  static update = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(Users);
    const user = await userRepository.findOne({
      where: {
        user_id: parseInt(req.params.id),
      },
    });
    if (user) {
      userRepository.merge(user, req.body);
      const result = await userRepository.save(user);
      res.json(result);
    } else {
      res.status(404).send("User not found");
    }
  };

  static delete = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(Users);
    const result = await userRepository.delete(req.params.id);
    if (result.affected === 0) {
      res.status(404).send("User not found");
    }

    res.status(204);
  };
}
