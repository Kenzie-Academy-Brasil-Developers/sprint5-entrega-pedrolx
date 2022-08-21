import { MigrationInterface, QueryRunner } from "typeorm";

export class users1661014865440 implements MigrationInterface {
    name = 'users1661014865440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_database" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(240) NOT NULL, "email" character varying(240) NOT NULL, "password" character varying NOT NULL, "age" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "UQ_35852d70e433073812c5b8cc4c9" UNIQUE ("email"), CONSTRAINT "PK_0b1fcfcec60981758c4e2150509" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users_database"`);
    }

}
