import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFirstMigration1717953032826 implements MigrationInterface {
    name = 'CreateFirstMigration1717953032826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ__users__F3DBC5721460B3F4"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "username" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ__users__AB6E6164B4C95DBA"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "DF_c9b5b525a96ddc2c5647d7f7fa5"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "UQ__categori__72E12F1B14E95BA2"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "description" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "DF_a7b2c155b5bad01eb952cf2e562"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "DF_a7b2c155b5bad01eb952cf2e562" DEFAULT getdate() FOR "created_at"`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "description" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" nvarchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "UQ__categori__72E12F1B14E95BA2" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "DF_c9b5b525a96ddc2c5647d7f7fa5" DEFAULT getdate() FOR "created_at"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" nvarchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ__users__AB6E6164B4C95DBA" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "username" nvarchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ__users__F3DBC5721460B3F4" UNIQUE ("username")`);
    }

}
