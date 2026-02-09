import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// Using a "glob" (the *) is more robust because it finds the file 
// even if there are hidden characters or path issues.
const testDir = defineBddConfig({
  features: '*.feature', // Look for any file ending in .feature in this folder
  steps: 'steps.js',
});

export default defineConfig({
  testDir,
  reporter: 'html',
  use: {
    screenshot: 'on',
    video: 'on-first-retry',
  },
});
