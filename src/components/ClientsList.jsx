import { useEffect, useState } from "react";
import clientService from "../services/clientService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const ClientsList = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  const init = () => {
    clientService.getAll()
      .then((res) => {
        console.log("Mostrando listado de todos los clientes.", res.data);
        setClients(res.data);
      })
      .catch(err => console.error("Error cargando clientes", err));
  };

  useEffect(() => {
    init();
  }, []);

  const handleRestrict = (id) => {
    const confirmRestrict = window.confirm(
      "¿Está seguro que desea restringir este cliente?"
    );
    if (confirmRestrict) {
      clientService.changeState(id, "Restringido")
      .then((response) => {
        console.log("El cliente ha sido restringido", response.data);
        init();
      })
      .catch((error) => {
        console.log("Se ha producido un error al intentar restringir al cliente", error);
      })
    }
  };

  return (
    <Box>
      <h3>Clientes</h3>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon></AddIcon>}
        onClick={() => navigate("/client/add")}
        sx={{ mb: 2 }}
      >
        Nuevo Cliente
      </Button>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Nombre</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Documento</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Estado</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map(c => (
              <TableRow key={c.id}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.documentNumber}</TableCell>
                <TableCell>{c.currentState?.name}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    color="info"
                    variant="contained"
                    startIcon={<EditIcon></EditIcon>}
                    onClick={() => navigate(`/client/edit/${c.id}`)}
                    sx={{ mr: 1 }}
                  >
                    Editar
                  </Button>
                  {c.currentState?.name !== "Restringido" && (
                    <Button
                      size="small"
                      variant="contained"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleRestrict(c.id)}
                    >
                      Restringir
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ClientsList;