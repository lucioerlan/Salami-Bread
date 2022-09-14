import apm from 'elastic-apm-node';

class ObservabilityProvider {
    public init() {
        apm.start({
            serviceName: process.env.ELASTIC_APM_SERVICE_NAME,
            serverUrl: process.env.ELASTIC_APM_SERVER_URL,
        });
    }
}

export default ObservabilityProvider;
