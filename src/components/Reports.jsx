import { useEffect, useState } from "react";
import loanService from "../services/loanService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const Reports = () => {
  const [loans, setLoans] = useState([]);
  const [ranking, setRanking] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const initLoans = () => {
    loanService.getAll()
      .then((res) => {
        console.log("Cargando todos los préstamos para reportes.", res.data);
        setLoans(res.data);
      })
      .catch(err => console.error("Error cargando préstamos:", err));
  };

  // Lista ranking de las herramientas más prestadas
  const handleRankingFilter = () => {
    loanService.getRanking(fromDate || null, toDate || null)
      .then((res) => {
        console.log("Cargando ranking de herramientas.", res.data);
        setRanking(res.data);
      })
      .catch(err => console.error("Error cargando ranking:", err));
  };

  const handleClearRanking = () => {
    setFromDate("");
    setToDate("");
    setRanking([]);
  };

   // Lista préstamos activos y su estado
  const activeLoans = loans.filter(l =>
    l.currentState?.name === "En progreso" || l.currentState?.name === "Atrasado"
  );

  // Lista clientes conm atrasos
  const clientsWithDelays = Array.from(
    new Map(
      loans
        .filter(l => l.currentState?.name === "Atrasado")
        .map(l => [l.client?.id, l.client]) // map para unique
    ).values()
  );

  useEffect(() => {
    initLoans();
  }, []);

  return (
    <Box>
      <h3>Reportes</h3>

      {/* --- Sección 1: Préstamos activos --- */}
      <h4>Préstamos Activos (En progreso / Atrasado)</h4>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Cliente</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Herramienta</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Estado</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Entrega</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Devolución pactada</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeLoans.map((l) => (
              <TableRow key={l.id}>
                <TableCell>{l.client?.name}</TableCell>
                <TableCell>{l.tool?.name}</TableCell>
                <TableCell>{l.currentState?.name}</TableCell>
                <TableCell>{new Date(l.deliveryDate).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(l.returnDate).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* --- Sección 2: Clientes con atrasos --- */}
      <h4>Clientes con atrasos</h4>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Cliente</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientsWithDelays.map((c) => (
              <TableRow key={c?.id}>
                <TableCell>{c?.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* --- Sección 3: Ranking herramientas --- */}
      <h4>Ranking de Herramientas más Prestadas</h4>

      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Desde"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          size="small"
        />

        <TextField
          label="Hasta"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          size="small"
        />

        <Button variant="contained" color="info" onClick={handleRankingFilter}>
          Filtrar Ranking
        </Button>
        <Button variant="outlined" onClick={handleClearRanking}>
          Limpiar
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Herramienta</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Cantidad de Préstamos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ranking.map((r, idx) => (
              <TableRow key={idx}>
                <TableCell>{r.toolName}</TableCell>
                <TableCell>{r.totalLoans}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Reports;