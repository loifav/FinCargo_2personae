import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import PastTransactionTable from "./PastTransactionTable";
import PastTransactionFilters from "./PastTransactionFilters";  // Import du composant de filtre
import transactionData from "../../../mocks/pasttransactions.json";
import { PastTransaction } from "../../../types/PastTransaction";
import { useNavigate } from "react-router-dom";

interface Props {
  filterStatus: string; // Statut pour filtrer les transactions (payé, refusée, en attente)
}

const PastTransactionFileList: React.FC<Props> = ({ filterStatus }) => {
  const [transactions, setTransactions] = useState<PastTransaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<PastTransaction[]>([]);
  const [sortOrder, setSortOrder] = useState<string>(""); // Ajout pour gérer l'ordre de tri
  const navigate = useNavigate();

  useEffect(() => {
    // Transformation des données venant du fichier JSON
    const transformedData = transactionData.map((transaction, index) => ({
      id: index + 1,
      carrierName: transaction["carrierName"],
      taxID: transaction["taxID"],
      invoiceDate: transaction["invoiceDate"],
      address: transaction.address,
      country: transaction.country,
      raw: transaction.raw,
      net: transaction.net,
      reasonCode: transaction["reasonCode"],
    }));

    setTransactions(transformedData);
  }, []);

  useEffect(() => {
    // Applique le filtre selon le statut passé en prop
    let filtered: PastTransaction[];

    if (filterStatus === "payé") {
      filtered = transactions.filter((transaction) => transaction.reasonCode < 50);
    } else if (filterStatus === "refusée") {
      filtered = transactions.filter(
          (transaction) => transaction.reasonCode >= 50 && transaction.reasonCode <= 150
      );
    } else if (filterStatus === "en attente") {
      filtered = transactions.filter((transaction) => transaction.reasonCode > 150);
    } else {
      filtered = transactions; // Aucun filtre, on affiche toutes les transactions
    }

    // Applique l'ordre de tri si un ordre de tri est défini
    if (sortOrder === "dateAsc") {
      filtered.sort((a, b) => new Date(a.invoiceDate).getTime() - new Date(b.invoiceDate).getTime());
    } else if (sortOrder === "dateDesc") {
      filtered.sort((a, b) => new Date(b.invoiceDate).getTime() - new Date(a.invoiceDate).getTime());
    } else if (sortOrder === "amountAsc") {
      filtered.sort((a, b) => a.raw - b.raw);
    } else if (sortOrder === "amountDesc") {
      filtered.sort((a, b) => b.raw - a.raw);
    }

    setFilteredTransactions(filtered);
  }, [filterStatus, transactions, sortOrder]);

  // Fonction pour gérer la navigation (View) vers la transaction sélectionnée
  const handleViewClick = (id: number) => {
    navigate(`/${id}`); // Redirige vers la page de la transaction avec l'ID
  };

  // Fonction pour gérer le téléchargement (Download) de la transaction sélectionnée
  const handleDownloadClick = (id: number) => {
    const transaction = transactions.find((t) => t.id === id);
    if (transaction) {
      // Implémenter la logique de téléchargement ici (par exemple, générer un PDF)
      console.log("Téléchargement de la transaction : ", transaction);
    }
  };

  // Fonction pour gérer le changement de statut de filtre
  const handleFilterChange = (status: string) => {
    // Cette fonction peut être utilisée pour changer le statut du filtre dans le parent
    console.log("Filtre appliqué : ", status);
  };

  // Fonction pour gérer le changement de tri
  const handleSortChange = (order: string) => {
    setSortOrder(order);
  };

  return (
      <Box>
        {/* Ajout du composant de filtre */}
        <PastTransactionFilters
            filterStatus={filterStatus}
            sortOrder={sortOrder}
            onFilterChange={handleFilterChange}  // On passe la fonction de mise à jour du filtre
            onSortChange={handleSortChange}      // On passe la fonction de mise à jour du tri
        />

        <PastTransactionTable
            transactions={filteredTransactions} // Passe les transactions filtrées à la table
            onViewClick={handleViewClick} // Passe la fonction de navigation à la table
            onDownloadClick={handleDownloadClick} // Passe la fonction de téléchargement à la table
        />
      </Box>
  );
};

export default PastTransactionFileList;
