import { style } from "@vanilla-extract/css";
import { primaryColor } from "./index.css";

export const container = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 60,
  marginTop: 60,
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  backgroundColor: "white",
  padding: 32,
  boxShadow: "0px 1px 6px 0 #dedede",
  borderRadius: 4,
});

export const formField = style({
  width: "100%",
  marginTop: 12,
  padding: 6,
});

export const submit = style({
  backgroundColor: primaryColor,
  color: "white",
  padding: "8px 0",
  borderRadius: 4,
  marginTop: 20,
});
