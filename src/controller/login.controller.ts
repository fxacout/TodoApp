import { generateToken } from '../utils/generateToken';
import { Inject } from 'typescript-ioc';
import UsersService from '../service/users.service';

export default class LoginController {
    @Inject
    private usersService: UsersService;

    constructor(){
        this.get = this.get.bind(this);
    }
    public async get(req: any, res: any){
        const {username, password} = req.body;
        const validUser = await this.usersService.validateUser(username, password);
        if(!validUser){
            return res.status(409).json({
                message: 'Invalid user',
            })
        }
        generateToken(res, username);
        return res.status(200).json({
            message: 'User authenticated correctly',
        });
    }
}