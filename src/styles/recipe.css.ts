import { style } from "@vanilla-extract/css";
import { primaryColor } from "./index.css";

export const hero = style({
  display: "grid",
  marginTop: 40,
  gridTemplateColumns: "1fr 1fr",
  gap: 50,
});

export const metaContainer = style({
  display: "flex",
  justifyContent: "space-around",
  margin: "32px 0",
});

export const meta = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const metaIcon = style({
  width: 30,
  height: 30,
});

export const metaTitle = style({
  marginTop: 12,
  fontSize: "0.75rem",
  marginBottom: 4,
});

export const metaValue = style({
  fontSize: "0.85rem",
  color: "#999",
});

export const tagItem = style({
  padding: "4px 12px",
  backgroundColor: primaryColor,
  color: "white",
  borderRadius: 8,
  marginLeft: 16,
  textDecoration: "none",
  fontSize: "0.9rem",
});

export const recipe = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: 80,
  marginTop: 60,
});

export const instruction = style({
  marginBottom: 32,
});

export const instructionHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
});

export const instructionStepHeading = style({
  color: primaryColor,
  margin: 0,
});

export const line = style({
  borderTop: "1px solid #dedede",
  flex: 1,
});

export const ingredient = style({
  borderBottom: "1px solid #dedede",
  padding: "20px 0",
  selectors: {
    "&:first-of-type": {
      paddingTop: 0,
    },
    "&:last-of-type": {
      marginBottom: 40,
    },
  },
});
