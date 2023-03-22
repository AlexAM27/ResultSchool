import * as Sentry from "@sentry/react"
import { BrowserTracing } from "@sentry/tracing"

function init() {
  Sentry.init({
    dsn: "https://63e4cb8192be424483acf09bcb94ac1e@o4504878660321280.ingest.sentry.io/4504878670544896",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  })
}

function log(error) {
  Sentry.captureException(error)
}

const logger = {
  init,
  log,
}

export default logger
