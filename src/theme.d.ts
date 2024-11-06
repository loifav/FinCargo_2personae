// src/theme.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    cLight: PaletteColorOptions;
    cDark: PaletteColorOptions;
  }
  interface PaletteOptions {
    cLight?: PaletteColorOptions;
    cDark?: PaletteColorOptions;
  }
}
