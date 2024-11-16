import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import PastTransactionTable from "./PastTransactionTable";
import transactionData from "../../../mocks/pasttransactions.json";
import { PastTransaction } from "../../../types/PastTransaction";
import { useNavigate } from "react-router-dom";

interface Props {
  filterStatus: string; // Statut pour filtrer les transactions (payé, refusée, en attente)
}

const PastTransactionFileList: React.FC<Props> = ({ filterStatus }) => {
  const [transactions, setTransactions] = useState<PastTransaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<PastTransaction[]>([]);
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

    setFilteredTransactions(filtered);
  }, [filterStatus, transactions]);

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

  return (
      <Box>
        <PastTransactionTable
            transactions={filteredTransactions} // Passe les transactions filtrées à la table
            onViewClick={handleViewClick} // Passe la fonction de navigation à la table
            onDownloadClick={handleDownloadClick} // Passe la fonction de téléchargement à la table
        />
      </Box>
  );
};

export default PastTransactionFileList;
