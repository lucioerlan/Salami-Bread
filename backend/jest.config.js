module.exports = {
    roots: ['./'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testPathIgnorePatterns: ['node_modules/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/*.test.(ts|tsx)'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        // Mocks out all these file formats when tests are run
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            'identity-obj-proxy',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        "@modules/(.*)": "<rootDir>/src/modules/$1",
        "@config/(.*)": "<rootDir>/src/config/$1",
        "@infra/(.*)": "<rootDir>/src/infra/$1",
    },
};
