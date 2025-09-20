import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toolService from "../services/toolService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const ToolList = () => {
  const [tools, setTools] = useState([]);

  const navigate = useNavigate();

  const init = () => {
    toolService
      .getAll()
      .then((response) => {
        console.log("Mostrando listado de todas las herramientas.", response.data);
        setTools(response.data);
      })
      .catch((error) => {
        console.log("Error al cargar herramientas", error)
    });
    };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
        "¿Está seguro que desea dar de baja esta herramienta?"
    );
    if (confirmDelete) {
        toolService.changeState(id, "Dada de baja")
        .then((response) => {
            console.log("La herramienta ha sido dada de baja", response.data);
            init();
        })
        .catch((error) => {
            console.log("Se ha producido un error al intentar dar de baja la herramienta",
                error
            );
        });
    }
  };

  const handleEdit = (id) => {
    navigate(`/tool/edit/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <br />
      <Link to="/tool/add" style={{ textDecoration: "none", marginBottom: "1rem"}}>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Añadir Herramienta
        </Button>
      </Link>
      <br /> 
      <br />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Nombre</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Stock</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Estado</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Operaciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tools.map((t) => (
            <TableRow key={t.id}>
              <TableCell>{t.name}</TableCell>
              <TableCell>{t.stock}</TableCell>
              <TableCell>{t.currentState?.name}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="info"
                  size="small"
                  onClick={() => handleEdit(t.id)}
                  startIcon={<EditIcon />}
                  sx={{ mr: 1 }}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => handleDelete(t.id)}
                  startIcon={<DeleteIcon />}
                >
                  Dar de baja
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ToolList;