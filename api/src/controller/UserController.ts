import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Users } from "../entity/User";
import { AppDataSource } from "../data-source";

export class UserController {
  static getAll = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(Users);
    const users = await userRepository.find();
    res.json(users);
  };

  static create = async (req: Request, res: Response) => {
    const userRepository = AppDataSource.getRepository(Users);
    const user = userRepository.create(req.body);
    await userRepository.save(user);
    res.json(user);
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
    res.json(result);
  };
}
