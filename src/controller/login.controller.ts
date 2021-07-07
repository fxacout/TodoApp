export default class LoginController {
    public async get(req: any, res: any){
        return res.json({
            message: 'Hola mundo!',
        });
    }
}