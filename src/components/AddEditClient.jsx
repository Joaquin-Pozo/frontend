import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clientService from "../services/clientService";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SaveIcon from "@mui/icons-material/Save";

const AddEditClient = () => {
  const [client, setClient] = useState({
    name: "",
    documentNumber: "",
    currentState: { id: 1 } // por defecto Activo
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      clientService.get(id)
        .then(res => setClient(res.data))
        .catch(err => console.error("Error cargando cliente:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "currentState") {
      setClient({ ...client, currentState: { id: parseInt(value) } });
    } else {
      setClient({ ...client, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      clientService.update(client)
        .then(() => navigate("/client/list"))
        .catch(err => console.error("Error actualizando cliente:", err));
    } else {
      clientService.create(client)
        .then(() => navigate("/client/list"))
        .catch(err => console.error("Error creando cliente:", err));
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300 }}
    >
      <h3>{id ? "Editar Cliente" : "Nuevo Cliente"}</h3>
      <TextField
        label="Nombre"
        name="name"
        value={client.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Documento"
        name="documentNumber"
        helperText="Ej. 12.587.698-8"
        value={client.documentNumber}
        onChange={handleChange}
        required
      />
      <TextField
        select
        label="Estado"
        name="currentState"
        value={client.currentState?.id || ""}
        onChange={handleChange}
        required
      >
        <MenuItem value={1}>Activo</MenuItem>
        <MenuItem value={2}>Restringido</MenuItem>
      </TextField>
      <Button startIcon={<SaveIcon />} color="primary" variant="contained" type="submit">
        {id ? "Actualizar" : "Guardar"}
      </Button>
      <Button variant="outlined" onClick={() => navigate("/client/list")}>
        Cancelar
      </Button>
    </Box>
  );
};

export default AddEditClient;