import dotenv from 'dotenv';
import App from './app';
import Observability from '@modules/providers/Observability.provider';

class Server {
    start() {
        const app = new App();
        const observability = new Observability();

        dotenv.config();
        observability.init();
        app.build();
        app.start();
    }
}

const server = new Server();
server.start();
