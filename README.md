# Wish Slots Gaming Platform

An original gaming-platform starter project with a customer website, admin dashboard, Android app shell, 2D game, and API.

## Current scope
This starter is **free-to-play demo only**. It does not implement deposits, wagering, cash prizes, cash redemption, or withdrawals. Demo credits have no monetary value and cannot be purchased or redeemed.

## Stack
- Website and admin: Next.js + TypeScript
- 2D game: Phaser 3 + Vite
- Android shell: Expo + React Native
- API: NestJS
- Database: PostgreSQL (schema starter in `database/`)

## Repository layout
```text
apps/
  website/       Customer-facing website
  admin/         Admin dashboard shell
  mobile/        Expo Android app shell
games/
  wish-slots/    Phaser 2D demo game
backend/
  api/           NestJS API
database/        Initial PostgreSQL schema
docs/            Architecture and safety notes
```

## Requirements
- Node.js 20 or newer
- npm 10 or newer
- For Android builds: Expo Go or an Android build environment

## Setup
From the repository root:

```bash
npm install
```

Run one workspace at a time:

```bash
npm run dev:website
npm run dev:admin
npm run dev:game
npm run dev:api
npm run dev:mobile
```

Website: `http://localhost:3000`  
Admin: `http://localhost:3001`  
Game: `http://localhost:5173`  
API: `http://localhost:4000`

The mobile app starts with Expo's QR-code workflow. Use the Expo Go app to preview it on Android.

## Important setup notes
- Copy `.env.example` to `.env` only when configuring the API.
- The API currently uses an in-memory demo result generator. It is not production-ready and does not persist users, credits, or results.
- The game client displays server responses; it must not decide the result.
- Do not add real-money features unless qualified legal counsel confirms authorization in every target market and all licensing, age, location, payment, responsible-play, security, and independent-testing requirements are met.

## Development order
1. Install dependencies and verify the website, game, and API run.
2. Build the Wish Slots UI and game flow.
3. Add database persistence and authentication.
4. Build admin permissions and audit logs.
5. Add mobile integration and testing.
6. Review legal and security requirements before any public launch.
