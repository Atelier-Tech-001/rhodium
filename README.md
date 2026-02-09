# Rhodium (RH)

Rhodium es una plataforma premium y minimalista de integración unificada de wallets crypto (API + SDK) para juegos y comercios que quieren aceptar pagos en crypto de forma sencilla.

## Stack 2026 (Best Practices)

- **Frontend**: Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Radix primitives
- **Backend**: Next.js API Routes
- **Wallet layer**: Dynamic.xyz SDK (embedded + external wallets)
- **Fallback**: Wagmi + viem + WalletConnect v2
- **DB**: Prisma + PostgreSQL (Supabase o Neon)
- **Auth**: Dynamic auth (+ NextAuth si es necesario)

## Estructura del monorepo

```
apps/
  web/      # Landing + Dashboard (Next.js)
  sdk/      # SDK publicable
packages/
  ui/       # Componentes compartidos
  core/     # Tipos y lógica común
prisma/
  schema.prisma
```

## Requisitos

- Node.js 20+
- pnpm 9+

## Setup rápido

```bash
pnpm install
pnpm dev
```

La app web corre en `http://localhost:3000`.

## Variables de entorno

Crea un archivo `.env.local` en `apps/web`:

```
NEXT_PUBLIC_DYNAMIC_ENV_ID=tu_dynamic_env_id
DATABASE_URL=postgresql://user:password@host:5432/rhodium
```

> `NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID` también es aceptado como fallback.

## API (MVP)

- `POST /api/connect` → inicia conexión de wallet
- `POST /api/pay` → requestPayment
- `POST /api/webhooks/transactions` → webhook de transacciones

## SDK (apps/sdk)

```ts
import { RhodiumClient } from "@rhodium/sdk";

const client = new RhodiumClient({
  apiBaseUrl: "https://rhodium.xyz",
  apiKey: "YOUR_KEY"
});

await client.requestPayment({
  amount: "120",
  currency: "USDC",
  recipient: "0x1234...",
  memo: "Order #101"
});
```

## Deploy en Vercel

1. Conecta el repo en Vercel.
2. Configura `apps/web` como root del proyecto.
3. Define las variables de entorno.

## Diseño

- Paleta: negro (#0A0A0A), gris antracita, plata metálico (#C0C0C0), azul noche.
- Tipografía: Neue Haas Grotesk / Inter / Satoshi.
- Mucho whitespace y bordes sutiles.
