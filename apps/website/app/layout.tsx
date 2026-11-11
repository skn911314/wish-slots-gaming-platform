import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wish Slots | Free Demo",
  description: "Play an original free-to-play slot-style demo.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
