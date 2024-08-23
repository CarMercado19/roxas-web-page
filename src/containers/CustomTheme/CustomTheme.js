import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      gradient: "linear-gradient(135deg, #0b0f14, #445b73)",
    },
    text: {
      primary: "#f8f8f8",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontWeight: "bold",
      textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)", // Sombra más prominente
    },
    h4: {
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        item: {
          padding: 0,
        },
      },
    },
  },
});

const CustomTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomTheme;
