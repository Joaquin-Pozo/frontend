import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HistoryIcon from '@mui/icons-material/History';
import ConstructionIcon from '@mui/icons-material/Construction';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeIcon from "@mui/icons-material/Home";
import HandshakeIcon from '@mui/icons-material/Handshake';
import DescriptionIcon from '@mui/icons-material/Description';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate } from "react-router-dom";
import { useThemeToggle } from "../context/ThemeContext";

export default function Sidemenu({ open, toggleDrawer }) {
  const navigate = useNavigate();
  const { mode, toggleTheme } = useThemeToggle();

  const listOptions = () => (
    <Box role="presentation" sx={{ width: 250 }}>
      <List>
        <ListItemButton onClick={() => navigate("/home")}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>

        <Divider />

        <ListItemButton onClick={() => navigate("/client/list")}>
          <ListItemIcon><PeopleAltIcon /></ListItemIcon>
          <ListItemText primary="Clientes" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/tool/list")}>
          <ListItemIcon><ConstructionIcon /></ListItemIcon>
          <ListItemText primary="Herramientas" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/loan/list")}>
          <ListItemIcon><HandshakeIcon /></ListItemIcon>
          <ListItemText primary="Préstamos" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/kardex/list")}>
          <ListItemIcon><HistoryIcon /></ListItemIcon>
          <ListItemText primary="Kardex" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/reports")}>
          <ListItemIcon><DescriptionIcon /></ListItemIcon>
          <ListItemText primary="Reportes" />
        </ListItemButton>

        <Divider sx={{ my: 2 }} />

        {/* 🌗 Botón para cambiar tema */}
        <ListItemButton onClick={toggleTheme}>
          <ListItemIcon>
            {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
          </ListItemIcon>
          <ListItemText
            primary={mode === "light" ? "Modo oscuro" : "Modo claro"}
          />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      {listOptions()}
    </Drawer>
  );
}