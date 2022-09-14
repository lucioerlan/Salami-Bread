import App from '../src/app';

describe('App', () => {
    let app: App;

    beforeEach(() => {
        app = new App();
    });

    it('should build the app', () => {
        app.build();
    });

    it('should have a logger', () => {
        app.build();
        expect(app.logger).toBeDefined();
    });
});
