import app from './app';
import loginRouter from './route/login.router';
const port = process.env['PORT'] || 3000;

app.use('/login',loginRouter);

app.listen(port, () => console.log(`App listening on port:${port}`))
