# waterfront-app


Next.js booking PWA + admin portal + Supabase + webhooks for Waterfront

Related Repositories

📱 Booking PWA + Admin → https://github.com/BBXtreme/waterfront-app
📖 Docs + MQTT contract → https://github.com/BBXtreme/waterfront-docs



# Waterfront Booking & Admin App

Next.js 14+ (App Router) PWA for self-service kayak/SUP rentals.  
Integrates Supabase (auth + postgres), Tailwind + DaisyUI, MQTT for real-time lock control.

## Links
- Full specs & architecture → https://github.com/BBXtreme/waterfront-docs
- ESP32 firmware → https://github.com/BBXtreme/waterfront-esp32
- MQTT contract → https://github.com/BBXtreme/waterfront-docs/blob/main/MQTT_SPEC.md

## Tech Stack
- Next.js 15 (app router)
- TypeScript
- Tailwind CSS + DaisyUI
- Supabase (Auth, Database, Realtime?)
- PNPM
- Docker + docker-compose for local dev (Supabase + Mosquitto)

## Quick Start
```bash
pnpm install
cp .env.example .env.local
# edit .env.local
docker compose up -d   # start Supabase + MQTT if needed
pnpm dev
```

## Setup Details
1. Clone repos: waterfront-app, waterfront-docs, waterfront-esp32.
2. Configure .env.local with required vars (see .env.example).
3. Run `docker compose up -d` for local Supabase and Mosquitto.
4. Deploy to Vercel; set env vars in dashboard.
5. For MQTT: Use HiveMQ Cloud; update broker URL in hooks/useMqtt.ts.

## Testing
- Run `pnpm test` for Vitest.
- Use /test-connections for integration checks.
- MQTT: Test with MqttTestPanel component.

## Contributing
- Follow CONVENTIONS.md.
- Use conventional commits.
- PRs require tests and linting.
