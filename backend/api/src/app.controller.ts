import { Controller, Get, Post } from "@nestjs/common";
import { randomUUID } from "crypto";

const symbols = ["cherry", "lemon", "star", "diamond", "bell", "clover", "seven", "moon", "crown", "gift"];

@Controller()
export class AppController {
  @Get("health")
  health() {
    return { status: "ok", mode: "free-demo-only" };
  }

  @Post("games/wish-slots/spin")
  spin() {
    // Server-side demo outcome. No wagering or monetary value.
    const reels = Array.from({ length: 5 }, () =>
      Array.from({ length: 3 }, () => symbols[Math.floor(Math.random() * symbols.length)])
    );
    return {
      resultId: randomUUID(),
      game: "wish-slots",
      reels,
      demoOnly: true,
      message: "Fictional demo result; no cash value."
    };
  }
}
