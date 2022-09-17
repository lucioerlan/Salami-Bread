import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class Categories1543557534534 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                    },
                    {
                        name: 'name',
                        type: 'varchar(200)',
                    },
                    {
                        name: 'category_id',
                        type: 'int',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }
}
