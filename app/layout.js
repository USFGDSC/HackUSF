import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "HackUSF",
  description: "GDSC at USF Offical Hackathon Website",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${poppins.className}`}>{children}</body>
      </html>
  );
}
