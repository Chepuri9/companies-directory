import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    success: string;
  }

  interface Palette {
    custom: {
      light: string;
      main: string;
      dark: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      light: string;
      main: string;
      dark: string;
    };
  }
}

const WebTheme = createTheme({
  palette: {
    primary: {
      main: "#2A8B7E", // Deep teal (darker main)
      light: "#EEFAF2", // Your mint green (light variant)
      dark: "#1A5A52", // Very dark teal (dark variant)
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#B8856F", // Warm terracotta (complements mint)
      light: "#E8D4C8", // Light beige
      dark: "#8B6856", // Dark brown
      contrastText: "#ffffff",
    },
    error: {
      main: "#E63946",
      light: "#F1AFAF",
      dark: "#A4161A",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#F77F00",
      light: "#FCBF49",
      dark: "#D62828",
      contrastText: "#ffffff",
    },
    info: {
      main: "#457B9D",
      light: "#A8DADC",
      dark: "#1D3557",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2A8B7E",
      light: "#7FC7BE",
      dark: "#1A5A52",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#1A5A52",
      secondary: "#fff",
      success: "#2A8B7E",
      disabled: "#B0BAB7",
    },
    divider: "#D8E6E3",
    background: {
      paper: "#FFFFFF",
      default: "#F7FCFB",
    },
    action: {
      active: "#2A8B7E",
      hover: "#E8F5F2",
      selected: "#D8E6E3",
      disabled: "#C8D8D5",
      disabledBackground: "#E8F5F2",
    },
    custom: {
      light: "#EEFAF2",
      main: "#2A8B7E",
      dark: "#1A5A52",
    },
  },
  typography: {
    fontFamily: '"Geist", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#1A5A52",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#1A5A52",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#2A8B7E",
    },
    body1: {
      fontSize: "1rem",
      color: "#1A5A52",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      color: "#fff",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: "8px",
        },
        contained: {
          boxShadow: "0 2px 8px rgba(42, 139, 126, 0.15)",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(42, 139, 126, 0.25)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(26, 90, 82, 0.08)",
          border: "1px solid #E8F5F2",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            backgroundColor: "#FAFBFB",
            "&:hover fieldset": {
              borderColor: "#EEFAF2",
            },
          },
        },
      },
    },
  },
});

export default WebTheme;
