# Module Federation Demo — @module-federation/vite

Three Vite apps, one composed page.

## Structure

```
mfe-demo/
├── host/          ← Shell app       (port 5173)
├── remote-a/      ← Inventory MFE   (port 5174)
└── remote-b/      ← Analytics MFE   (port 5175)
```

## Setup

Open **3 terminals** and run each app:

```bash
# Terminal 1 — Remote A (must start before host)
cd remote-a && npm install && npm run dev

# Terminal 2 — Remote B (must start before host)
cd remote-b && npm install && npm run dev

# Terminal 3 — Host
cd host && npm install && npm run dev
```

Then open http://localhost:5173

> Remotes must be running before the host loads, because the host
> fetches remoteEntry.js from them at runtime.

This is how the application looks like 

<img width="2534" height="2106" alt="New Note" src="https://github.com/user-attachments/assets/0f471d0c-b191-4563-8c7e-043e9c076d63" />

