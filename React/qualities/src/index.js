import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./app/App"
import * as Sentry from "@sentry/react"
import { BrowserTracing } from "@sentry/tracing"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"

Sentry.init({
  dsn: "https://63e4cb8192be424483acf09bcb94ac1e@o4504878660321280.ingest.sentry.io/4504878670544896",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
