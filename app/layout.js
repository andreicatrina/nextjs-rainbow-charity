import "./globals.css";
import { Inter, Playfair_Display, Rubik } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

const playfair = Playfair_Display({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
