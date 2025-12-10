import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header></header>
      {children}
      <footer></footer>
    </>
  );
};

export default Layout;
