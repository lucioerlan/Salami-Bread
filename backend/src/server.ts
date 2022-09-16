import dotenv from 'dotenv';
import App from './app';
import Observability from '@modules/providers/Observability.provider';

class Server {
    start() {
        const observability = new Observability();
        observability.init();

        const app = new App();
        dotenv.config();
        app.build();
        app.start();
    }
}

const server = new Server();
server.start();
