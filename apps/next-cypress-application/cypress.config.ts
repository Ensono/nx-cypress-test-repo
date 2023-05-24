import { defineConfig } from 'cypress';

import { baseConfig } from '../../cypress.config.base';

export default defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    screenshotOnRunFailure: true,
    video: true,
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    }
  },
});
