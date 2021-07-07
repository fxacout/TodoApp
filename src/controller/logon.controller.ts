import { Inject } from 'typescript-ioc';
import UsersService from '../service/users.service';
export default class LogonController {
    @Inject
    private userService: UsersService;

    constructor(){
        this.post = this.post.bind(this); // Express weird interaction with classes
    }

    public async post(req: any, res: any){
        const { username, password} = req.body;
        try{
            await this.userService.createUser(username, password);
        }catch(error){
            return res.status(409).json({
                message: error.message || 'Unable to create the user',
            })
        }
        return res.status(200).json({
            message: 'User created successfully'
        })
    }
}