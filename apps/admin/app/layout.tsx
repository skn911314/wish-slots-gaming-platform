import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Wish Slots Admin", description: "Admin dashboard starter" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
