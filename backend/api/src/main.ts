import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:5173"] });
  const port = Number(process.env.PORT || 4000);
  await app.listen(port);
  console.log(`Wish Slots API running on http://localhost:${port}`);
}
bootstrap();
