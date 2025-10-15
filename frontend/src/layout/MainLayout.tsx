import React from "react";
import { Footer } from "./Footer";
import Navbar from "./NavBar";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  return (
    <>
      <Navbar />
      <main >
        {children}
      </main>
      <Footer />

    </>

  );
};

export default MainLayout;
