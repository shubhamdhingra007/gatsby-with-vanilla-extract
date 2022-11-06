import { style } from "@vanilla-extract/css";

const cardRadius = "4px";

export const container = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
});

export const card = style({
  boxShadow: "0px 0px 6px 1px #dedede",
  borderRadius: cardRadius,
  position: "relative",
  ":hover": {
    boxShadow: "2px 4px 8px 2px #dedede",
  },
});

export const cardImg = style({
  borderTopRightRadius: cardRadius,
  borderTopLeftRadius: cardRadius,
});

export const cardContent = style({
  padding: "12px 20px 20px",
});

export const cardLink = style({
  textDecoration: "none",
  "::before": {
    content: "",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export const cardMeta = style({
  color: "#999",
  fontSize: "0.8rem",
});
