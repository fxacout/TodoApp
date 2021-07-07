import app from './app';
import loginRouter from './route/login.router';
import logonRouter from './route/logon.router';
const port = process.env['PORT'] || 3000;

app.use('/login',loginRouter);
app.use('/logon', logonRouter);

app.listen(port, () => console.log(`App listening on port:${port}`))
