import { Link } from "gatsby";
import React from "react";
import {
  container,
  content,
  footer,
  header,
  navbar,
  pageLinks
} from "./layout.css";

export const PageLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className={container}>
      <header className={header}>
        <nav className={navbar}>
          <Link to="/">Home</Link>
          <ul className={pageLinks}>
            <li>
              <Link to="/mdx">MDXs</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={content}>{children}</main>
      <footer className={footer}>
        <p>Layout footer</p>
      </footer>
    </div>
  );
};
