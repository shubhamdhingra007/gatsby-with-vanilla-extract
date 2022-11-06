import { style } from "@vanilla-extract/css";

export const gallery = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
});

export const image = style({
  borderRadius: "2rem",
});
