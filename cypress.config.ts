<<<<<<< HEAD
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4000'
  }
=======
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3434',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
>>>>>>> 1b5033479af1314ba34b929cd7491d8cb85573b9
});
