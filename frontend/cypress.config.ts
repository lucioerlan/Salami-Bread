import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
		baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    env: {
      email: "admin@user.com",
      password: "123456",
    },
    video: true,
    watchForFileChanges: false,
    defaultCommandTimeout: 8000,
    execTimeout: 60000,
    taskTimeout: 60000,
    pageLoadTimeout: 30000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 720,
    projectId: "e4uxw9",
	},
});
