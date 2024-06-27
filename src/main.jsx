import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import * as Sentry from "@sentry/react";
// import { metricsAggregatorIntegration } from "@sentry/metrics";

Sentry.init({
        dsn: "https://c04e8a6dc9e6ef9780d84916cb7b3ad5@o4507502967521280.ingest.de.sentry.io/4507502972239952",    integrations: [
        Sentry.browserTracingIntegration(),
        // Sentry.metrics.metricsAggregatorIntegration(),
        Sentry.reactRouterV6BrowserTracingIntegration({
            useEffect: React.useEffect,
        }),
        Sentry.replayIntegration({
            maskAllText: false,
            blockAllMedia: false,
        }),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)