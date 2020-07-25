// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import { chalkProcessing } from './chalkConfig';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  port: 8080,
  ui: {
    port: 8081,
  },
  server: {
    baseDir: 'dist',
  },

  files: ['src/*.html'],
  cors: true,
  middleware: [
    function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    },
    historyApiFallback(),
  ],
});
