import Header from "@/modules/header/header";
import style from "./style.module.css";
import React from "react";
import Footer from "@/modules/footer/footer";

interface ILayoutProps {
  children: React.JSX.Element;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
