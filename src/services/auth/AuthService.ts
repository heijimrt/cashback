// import {sign} from "jsonwebtoken";
import {
    Inject,
    Service
} from "@tsed/di";

// import AuthenticationMiddleware from "@Infrastructure/Http/Middleware/AuthenticationMiddleware";
import { User } from '../../entity/User';
import { Repository } from 'typeorm';

@Service()
export default class AuthService {
    @Inject(User)
    private readonly userRepository: Repository<User>;

    public async register(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    // public async retrieveUserByToken(token: string): Promise<User | null> {
    //     const query = this.userModel.findOne({
    //         // token,
    //     });

    //     // return await query.exec();
    // }

    // public async retrieveUserByCredentials(username: string, password: string): Promise<User | null> {
    //     const query = this.userModel.findOne({
    //         email: username,
    //         password: this.encryptPassword(password),
    //     });

    //     return await query.();
    // }

    // public async getUserToken(user: User): Promise<string> {
    //     // return sign({user}, AuthenticationMiddleware.secret)
    // }

    private encryptPassword(password: string): string {
        return password;
    }
}
