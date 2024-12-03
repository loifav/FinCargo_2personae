import React, { useState } from 'react';
import { CreditProgressBar } from '../components/CreditProgressBar';
import TransactionTable from '../components/transactionTable';
import FilterButtons from '../components/filterButtons';  // Importez FilterButtons

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState([
    {
      id: '1',
      amount: 1500,
      invoiceUrl: '#',
      actions: [
        { label: 'Accepter', onClick: () => console.log('Accepter') },
        { label: 'Rejeter', onClick: () => console.log('Rejeter') },
      ],
      status: 'stillToValidate', 
    },
    {
      id: '2',
      amount: 2000,
      invoiceUrl: '#',
      actions: [
        { label: 'Accepter', onClick: () => console.log('Accepter') },
        { label: 'Rejeter', onClick: () => console.log('Rejeter') },
      ],
      status: 'dueAndOverdue',
    },
  ]);

  const [filter, setFilter] = useState<string>('all'); 

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === 'all') return true;
    return transaction.status === filter;
  });

  const maxCredit = 5000;
  const usedCredit = 1500;

  return (
    <div className="p-6">
      <h1 className="text-6xl font-bold mb-6 text-center text-[#5885af]">Dashboard</h1>

    
      <FilterButtons onFilterChange={handleFilterChange} />

      <CreditProgressBar maxCredit={maxCredit} usedCredit={usedCredit} />

      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default Dashboard;


