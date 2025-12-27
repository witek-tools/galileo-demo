# Galileo Demo

**Galileo Demo** is a lightweight background **task queue service**. It accepts
jobs over an HTTP API, persists them, and runs them with a pool of workers.

This repository is a fixture for Galileo's live end-to-end smoke test.

## Runtime

- Runs on **Node.js 20** or later.
- The HTTP server listens on port **4000** by default.
- Requests authenticate with **API keys** sent in the `Authorization` header.

## Getting started

Install dependencies and start the server:

```bash
npm install
npm start
```

The service exposes `POST /jobs` to enqueue work.
