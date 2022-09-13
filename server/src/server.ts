import App from './app';

class Server {
    start() {
        const app = new App();
        app.build();
        app.start();
    }
}

const server = new Server();
server.start();
