import bunyan from 'bunyan';
import package_info from '../../package.json';

class LoggerProvider {
    logger: bunyan;

    _setupLogger() {
        const logger = bunyan.createLogger({
            name: package_info.name,
            streams: [
                {
                    stream: process.stdout,
                    level: bunyan.INFO,
                },
            ],
            Application: package_info.name,
        });

        this.logger = logger;
    }


    getLogger() {
        if (!this.logger) {
            this._setupLogger();
        }

        return this.logger;
    }
}

export default new LoggerProvider();
