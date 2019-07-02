import { User } from '../entity/User';

export default abstract class IAuthentication {
    public abstract async register(user: User): Promise<User>;
    public abstract async retrieveUserByToken(token: string): Promise<User | null>;
    public abstract async retrieveUserByCredentials(username: string, password: string): Promise<User | null>;
    public abstract async getUserToken(user: User): Promise<string>;
}
