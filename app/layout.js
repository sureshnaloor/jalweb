import { Inter } from "next/font/google";
import "./globals.css";
import Siteheader from "@/components/site-header";
import Mainsidebar from "@/components/site-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JALweb",
  description: "Internal portal for JAL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Siteheader />
        <div className="flex justify-center items-center">
          <Mainsidebar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
