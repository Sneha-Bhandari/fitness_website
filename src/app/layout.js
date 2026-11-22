
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navigation/Navbar";
import Footer from "./component/Navigation/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Gorkha Physical Fitness Training Center",
  description:
    "Build strength, improve endurance, and develop discipline at Gorkha Physical Fitness Training Center.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body
        className={`${montserrat.className} min-h-full flex flex-col`}
      >
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}
