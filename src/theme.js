import { createTheme } from "@mui/material/styles";

// 🌙 Tema oscuro con verde bosque
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#66BB6A" }, // verde brillante pero no saturado
    secondary: { main: "#A5D6A7" }, // verde menta claro
    background: {
      default: "#1b1f1b", // gris verdoso muy oscuro
      paper: "#262b26", // tarjetas ligeramente más claras
    },
    text: {
      primary: "#E8F5E9", // blanco verdoso suave
      secondary: "#B0C9B1", // verde grisáceo
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "none",
          transition: "background-color 0.3s ease, color 0.3s ease",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          transition: "color 0.3s ease",
        }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          transition: "background-color 0.3s ease, color 0.3s ease",
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
            "& .MuiListItemIcon-root": {
              color: theme.palette.primary.light,
            },
            "& .MuiListItemText-primary": {
              color: theme.palette.primary.light,
            },
          },
        }),
      },
    },
  },
});

// ☀️ Tema claro con verde natural
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#43A047" }, // verde natural
    secondary: { main: "#81C784" }, // verde más suave
    background: {
      default: "#f6f9f6", // verde muy pálido casi blanco
      paper: "#ffffff",   // blanco neutro
    },
    text: {
      primary: "#1b1f1b", // gris oscuro con toque verdoso
      secondary: "#4E5C4E", // gris verdoso medio
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          textTransform: "none",
          transition: "background-color 0.3s ease, color 0.3s ease",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          transition: "color 0.3s ease",
        }),
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          transition: "background-color 0.3s ease, color 0.3s ease",
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
            "& .MuiListItemIcon-root": {
              color: theme.palette.primary.dark,
            },
            "& .MuiListItemText-primary": {
              color: theme.palette.primary.dark,
            },
          },
        }),
      },
    },
  },
});