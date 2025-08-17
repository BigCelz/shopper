import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Shopper",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

