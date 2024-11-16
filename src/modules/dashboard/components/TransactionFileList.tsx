import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import PastTransactionFilters from "./PastTransactionFilters";
import PastTransactionTable from "./PastTransactionTable";
import transactionData from "../../../mocks/transactions.json";
import { useNavigate } from "react-router-dom";

import { PastTransaction } from "../../../types/PastTransaction";

const TransactionFileList: React.FC = () => {
  const [transactions, setTransactions] = useState<PastTransaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<PastTransaction[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    // Transformation des données pour ajouter un ID unique
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
    setFilteredTransactions(transformedData);
  }, []);

  const handleFilterChange = (status: string) => {
    setFilterStatus(status);
    let filtered;

    if (status === "payé") {
      filtered = transactions.filter((transaction) => transaction.reasonCode < 50);
    } else if (status === "refusée") {
      filtered = transactions.filter(
          (transaction) => transaction.reasonCode >= 50 && transaction.reasonCode <= 150
      );
    } else if (status === "en attente") {
      filtered = transactions.filter((transaction) => transaction.reasonCode > 150);
    } else {
      filtered = transactions;
    }

    setFilteredTransactions(filtered);
  };

  const handleSortChange = (order: string) => {
    setSortOrder(order);
    const sortedTransactions = [...filteredTransactions];

    if (order === "dateAsc") {
      sortedTransactions.sort(
          (a, b) => new Date(a.invoiceDate).getTime() - new Date(b.invoiceDate).getTime()
      );
    } else if (order === "dateDesc") {
      sortedTransactions.sort(
          (a, b) => new Date(b.invoiceDate).getTime() - new Date(a.invoiceDate).getTime()
      );
    } else if (order === "amountAsc") {
      sortedTransactions.sort((a, b) => a.raw - b.raw);
    } else if (order === "amountDesc") {
      sortedTransactions.sort((a, b) => b.raw - a.raw);
    }

    setFilteredTransactions(sortedTransactions);
  };

  const handleView = (id: number) => {
    navigate(`/${id}`);
  };

  const handleDownload = (id: number) => {
    const transaction = transactions.find((t) => t.id === id);
    if (transaction) {
      console.log("Téléchargement de la transaction : ", transaction);
    }
  };

  return (
      <Box>
        <PastTransactionFilters
            filterStatus={filterStatus}
            sortOrder={sortOrder}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
        />

        <PastTransactionTable
            transactions={filteredTransactions}
            onView={handleView}
            onDownload={handleDownload}
        />
      </Box>
  );
};

export default TransactionFileList;
