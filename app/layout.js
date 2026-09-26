import "./globals.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Pixel Peak",
  description: "A gaming community built for adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grid min-h-screen grid-rows-[96px_1fr_64px]">
          <Header />

          <div className="flex">
            <Sidebar />

            <main className="flex-1 bg-slate-800 p-10 text-white">
              {children}
            </main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}