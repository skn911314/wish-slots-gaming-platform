import Phaser from "phaser";
import "./style.css";

class WishSlotsScene extends Phaser.Scene {
  private symbols = ["🍒", "🍋", "⭐", "💎", "🔔", "🍀", "7️⃣", "🌙", "👑", "🎁"];
  private reelTexts: Phaser.GameObjects.Text[][] = [];
  private status!: Phaser.GameObjects.Text;
  private spinning = false;

  constructor() { super("WishSlots"); }

  create() {
    const { width, height } = this.scale;
    this.add.text(width / 2, 34, "WISH SLOTS", { fontSize: "30px", color: "#f8eaff", fontStyle: "bold" }).setOrigin(0.5);
    this.add.text(width / 2, 70, "FREE DEMO · 5 REELS · 3 ROWS", { fontSize: "11px", color: "#c7b5ff", letterSpacing: 2 }).setOrigin(0.5);
    const cellW = 62, cellH = 66, gap = 7;
    const totalW = 5 * cellW + 4 * gap;
    const startX = (width - totalW) / 2;
    for (let col = 0; col < 5; col++) {
      const column: Phaser.GameObjects.Text[] = [];
      for (let row = 0; row < 3; row++) {
        const x = startX + col * (cellW + gap);
        const y = 135 + row * (cellH + 9);
        this.add.rectangle(x + cellW / 2, y + cellH / 2, cellW, cellH, 0x211b39).setStrokeStyle(2, 0x7657b9);
        const t = this.add.text(x + cellW / 2, y + cellH / 2, this.symbols[(col * 3 + row) % this.symbols.length], { fontSize: "30px" }).setOrigin(0.5);
        column.push(t);
      }
      this.reelTexts.push(column);
    }
    this.status = this.add.text(width / 2, 370, "Tap SPIN to play a demo round", { fontSize: "14px", color: "#ded5f7" }).setOrigin(0.5);
    const button = this.add.rectangle(width / 2, 430, 190, 58, 0x9b59e8).setInteractive({ useHandCursor: true });
    this.add.text(width / 2, 430, "SPIN", { fontSize: "22px", color: "#ffffff", fontStyle: "bold" }).setOrigin(0.5);
    button.on("pointerdown", () => this.spin());
    this.add.text(width / 2, height - 25, "Fictional demo credits only · No cash value", { fontSize: "11px", color: "#aaa0bd" }).setOrigin(0.5);
  }

  private async spin() {
    if (this.spinning) return;
    this.spinning = true;
    this.status.setText("Spinning...");
    // Demo-only placeholder outcome. Replace with a server-authoritative API result.
    await Promise.all(this.reelTexts.map((column, index) => new Promise<void>((resolve) => {
      this.time.delayedCall(450 + index * 220, () => {
        column.forEach((text) => text.setText(Phaser.Utils.Array.GetRandom(this.symbols)));
        resolve();
      });
    })));
    this.status.setText("Demo round complete · No cash value");
    this.spinning = false;
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  width: 430,
  height: 500,
  parent: "app",
  backgroundColor: "#100d20",
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
  scene: [WishSlotsScene],
});
