import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  border: "1px solid lightgrey",
  marginBottom: "20px",
  padding: "24px",
  borderRadius: "2px",
  textDecoration: "none",
});

export const postImage = style({
  minWidth: "250px",
  width: "250px",
  marginRight: "32px",
});
