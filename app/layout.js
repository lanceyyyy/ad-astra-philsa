import "../styles/globals.css";
import { Montserrat } from "next/font/google";
import Nav from "../components/nav/Nav";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ad Astra",
  description: "Join Ad Astra Now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="relative z-10 flex justify-center items-center flex-col overflow-hidden">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
