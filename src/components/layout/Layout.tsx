import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Newsletter from "../sections/Newsletter";

interface LayoutProps {
  children: ReactNode;
  showNewsletter?: boolean;
}

const Layout = ({ children, showNewsletter = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      {showNewsletter && <Newsletter />}
      <Footer />
    </div>
  );
};

export default Layout;
