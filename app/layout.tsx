import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taslima Akter Omi — English Teacher",
  description: "Portfolio of Taslima Akter Omi, English Language Teacher based in Palma de Mallorca, Spain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
