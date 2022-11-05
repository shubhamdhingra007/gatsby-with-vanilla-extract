import { style } from "@vanilla-extract/css";

const headerHeight = "70px";
const footerHeight = "200px";

export const container = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const header = style({
  height: headerHeight,
  backgroundColor: "#44257D",
  color: "white",
  padding: "12px 36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const content = style({
  padding: "0 20px",
  flex: 1,
  maxWidth: 1500,
  margin: "auto",
});

export const footer = style({
  height: footerHeight,
  backgroundColor: "#000",
  color: "#fff",
  padding: "12px 36px",
});
