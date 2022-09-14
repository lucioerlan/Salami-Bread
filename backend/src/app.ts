require('express-async-errors');
import config from './config';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import { routes } from './routes';
import LoggerProvider from './modules/providers/Logger.provider';

const DEFAULT_PORT = 5000;
const PORT = process.env.PORT || DEFAULT_PORT;
const ETAG = 'etag';

class App {
    app: express.Application;
    logger: { info: (arg0: string) => void }

    constructor() {
        this.app = express();
    }

    build() {
        this.setupLogger();
        this.setupPreRoutesMiddlewares();
        this.setupRoutes();
        this.setupPosRoutesMiddlewares();
    }

    start() {
        this.app.listen(PORT, () => {
            this.logger.info(`server listening on port: ${PORT}`);
        });
    }

    setupPreRoutesMiddlewares() {
        this.app.disable(ETAG);
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    setupPosRoutesMiddlewares() {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            const err = res.json({
                status: 404,
                errors: [
                    {
                        message: 'Route Not Found',
                    },
                ],
            });
            next(err);
        });
    }

    setupRoutes() {
        this.app.use(config.api.base_path, routes);
    }

    setupLogger() {
        this.logger = LoggerProvider.getLogger();
    }
}

export default App;
