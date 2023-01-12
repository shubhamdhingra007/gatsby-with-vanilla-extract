import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
});

export const postsBox = style({
  width: "70%",
  marginRight: "32px",
});

export const banner = style({
  flex: 1,
  border: "1px solid grey",
});
