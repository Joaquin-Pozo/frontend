import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toolService from "../services/toolService";
import { Box, TextField, Button, FormControl, MenuItem } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const AddEditTool = () => {
  const [toolIdentifier, setToolIdentifier] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [replacementCost, setReplacementCost] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [currentStateId, setCurrentStateId] = useState(1); // por defecto es Disponible

  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const saveTool = (e) => {
    e.preventDefault();

    const tool = {
      id,
      toolIdentifier,
      name,
      category,
      replacementCost,
      price,
      stock,
      currentState: { id: currentStateId },
    };

    if (id) {
      // Actualiza los datos de la herramienta
      toolService.update(tool).then(() => navigate("/tool/list"));
    } else {
      // Agrega una nueva herramienta
      toolService.create(tool).then(() => navigate("/tool/list"));
    }
  };

  useEffect(() => {
    if (id) {
      setTitle("Editar Herramienta");
      toolService.get(id).then((res) => {
        const tool = res.data;
        setToolIdentifier(tool.toolIdentifier);
        setName(tool.name);
        setCategory(tool.category);
        setReplacementCost(tool.replacementCost);
        setPrice(tool.price);
        setStock(tool.stock);
        setCurrentStateId(tool.currentState?.id || 1);
      });
    } else {
      setTitle("Nueva Herramienta");
      setCurrentStateId(1);
    }
  }, [id]);

  return (
    <Box 
    component="form" 
    display="flex" 
    flexDirection="column" 
    alignItems="center" 
    justifyContent="center">
      <h3>{title}</h3>
      <form>
        <FormControl fullWidth>
          <TextField
            id="toolIdentifier"
            label="Identificador (SKU)"
            value={toolIdentifier}
            onChange={(e) => setToolIdentifier(e.target.value)}
            variant="standard"
            helperText="SKU-123"
            required
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="name"
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="standard"
            required
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="category"
            label="Categoría"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="standard"
            required
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="replacementCost"
            label="Costo de Reposición"
            type="number"
            value={replacementCost}
            onChange={(e) => setReplacementCost(e.target.value)}
            variant="standard"
            required
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="price"
            label="Precio"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            variant="standard"
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="stock"
            label="Stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            variant="standard"
            required
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="currentStateId"
            select
            label="Estado"
            value={currentStateId}
            onChange={(e) => setCurrentStateId(e.target.value)}
            variant="standard"
            style={{width: "10%"}}
            required
          >
            <MenuItem value={1}>Disponible</MenuItem>
            <MenuItem value={2}>Prestada</MenuItem>
            <MenuItem value={3}>En reparación</MenuItem>
            <MenuItem value={4}>Dada de baja</MenuItem>
          </TextField>
        </FormControl>

        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={saveTool}
          startIcon={<SaveIcon />}
        >
          Guardar
        </Button>
      </form>
      <hr />
      <Link to="/tool/list">Volver a la Lista</Link>
    </Box>
  );
};

export default AddEditTool;