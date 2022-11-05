import { Link } from "gatsby";
import React from "react";
import { container, content, footer, header } from "../../styles/layout.css";

export const PageLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className={container}>
      <header className={header}>
        <Link to="/">Home</Link>
        <div>
          <Link to="gallery">Gallery</Link>
        </div>
      </header>
      <main className={content}>{children}</main>
      <footer className={footer}>
        <p>Layout footer</p>
      </footer>
    </div>
  );
};
