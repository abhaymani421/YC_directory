// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://98c7dd2a6353d988501cf40f46fa0fd9@o4509762179301376.ingest.us.sentry.io/4509762184609792",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry


  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
