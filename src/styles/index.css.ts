import { globalStyle, style } from "@vanilla-extract/css";

export const primaryColor = "#44257D";

globalStyle(`html, body`, {
  height: `100%`,
  fontSize: `18px`,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
});

globalStyle("body", {
  margin: 0,
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("a", {
  color: "inherit",
});

globalStyle("h1", {
  marginTop: "20px",
  marginBottom: "24px",
  fontSize: "2.2rem",
});

globalStyle("h2, h3", {
  marginTop: "12px",
  marginBottom: "24px",
});

globalStyle("h4, h5, h6", {
  marginTop: "8px",
  marginBottom: "12px",
});

export const list = style({
  listStyleType: "square",
});

export const listItem = style({
  fontWeight: "500",
});
