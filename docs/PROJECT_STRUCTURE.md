# Project structure

- `apps/website`: public customer-facing Next.js site.
- `apps/admin`: admin UI shell. Authentication and role checks are not implemented yet.
- `apps/mobile`: Expo React Native shell for Android.
- `games/wish-slots`: Phaser 3 browser game.
- `backend/api`: NestJS API; game demo result generation happens on the server.
- `database/schema.sql`: initial relational schema proposal.

Keep secrets on the server. Never place database credentials, signing keys, or admin secrets in browser or mobile code.
