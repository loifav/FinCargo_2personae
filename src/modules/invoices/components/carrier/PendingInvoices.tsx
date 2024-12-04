import React, { useState } from "react";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Switch,
  Typography,
} from "@mui/material";

interface Invoice {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
}

interface PendingInvoicesProps {
  invoices: Invoice[];
}

export const PendingInvoices: React.FC<PendingInvoicesProps> = ({
  invoices,
}) => {
  const [viewMode, setViewMode] = useState<"card" | "table">("table");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleExportCSV = () => {
    const selectedData = invoices.filter((invoice) =>
      selectedRows.includes(invoice.id)
    );
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["ID,Name,Amount,Due Date"]
        .concat(
          selectedData.map(
            (inv) => `${inv.id},${inv.name},${inv.amount},${inv.dueDate}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "invoices.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns: GridColDef<Invoice>[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      width: 150,
    },
    { field: "dueDate", headerName: "Due Date", width: 150 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h5">Pending Invoices</Typography>
        <div className="flex items-center gap-4">
          <Button
            variant="contained"
            color="primary"
            onClick={handleExportCSV}
            disabled={selectedRows.length === 0}
          >
            Export Selected
          </Button>
          <Switch
            checked={viewMode === "card"}
            onChange={(e) => setViewMode(e.target.checked ? "card" : "table")}
            color="primary"
          />
          <Typography>
            View as {viewMode === "card" ? "Cards" : "Table"}
          </Typography>
        </div>
      </div>

      {viewMode === "table" ? (
        <DataGrid
          rows={invoices}
          columns={columns}
          checkboxSelection
          onRowSelectionModelChange={(selectionModel: GridRowSelectionModel) =>
            setSelectedRows(selectionModel as string[])
          }
          autoHeight
          disableRowSelectionOnClick
        />
      ) : (
        <Grid container spacing={2}>
          {invoices.map((invoice) => (
            <Grid item xs={12} sm={6} md={4} key={invoice.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{invoice.name}</Typography>
                  <Typography>Amount: ${invoice.amount}</Typography>
                  <Typography>Due Date: {invoice.dueDate}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
