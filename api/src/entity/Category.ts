import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  created_at: Date;
}
