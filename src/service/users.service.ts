import { Model, model } from 'mongoose';
import {sha1} from 'object-hash';

import UserSchema from '../model/user.schema';
export default class UsersService {
  private Users: Model<unknown>;
  constructor() {
      this.Users = model('users',UserSchema);
  }

  public async validateUser(username: string, password: string){
    const user = await this.Users.find({ username, password: sha1({password, salt: process.env['SALT']})})
    return user.length > 0;
  }

  public async createUser(username: string, password: string){
      if(await this.existsUser(username)){
        throw Error('User already on DB');
      }
      const newUser = new this.Users({ username, password: sha1({password, salt: process.env['SALT']})});
      await newUser.save();
      return;
  }

  public async existsUser(username: string){
    const users = await this.Users.find({ username});
    return users.length > 0;
  }
}
