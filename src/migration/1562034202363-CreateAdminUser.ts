import {
    MigrationInterface,
    QueryRunner,
    getRepository
} from 'typeorm';
import { User } from '../entity/User';

export class CreateAdminUser1562034202363 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let user = new User();
        user.firstName = 'admin';
        user.surName = 'admin';
        user.email = 'admin@teste.com.br';
        user.password = 'admin';
        user.hashPassword();
        user.role = 'ADMIN';
        user.document = 21321321321;
        const userRepository = getRepository(User);
        await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
