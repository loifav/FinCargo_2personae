import React from "react";
import { useSearchParams } from "react-router-dom";
import DueOverdue from "../../components/freightforwarder/status/dueOverdue/DueOverdue";
import FilterButtons from "@modules/invoices/components/freightforwarder/filterButtons";
import { CreditProgressBar } from "@modules/invoices/components/freightforwarder/CreditProgressBar";
import PastTransactionFileList from "@modules/pastInvoices/components/transactionPast/PastTransactionFileList";
import ToValidate from "../../components/freightforwarder/status/toValidate/toValidate";


const FreightForwarderTransactions: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterStatus = searchParams.get("tab") || "toValidate";

  const maxCredit = 5000;
  const usedCredit = 1500;

  const handleFilterChange = (filter: string) => {
    setSearchParams({ tab: filter });
  };

  const renderContent = () => {
    switch (filterStatus) {
      case "toValidate":
        return <ToValidate filterStatus="toValidate" />;
      case "dueAndOverdue":
        return <DueOverdue />;
      case "refused":
        return (
            <div>
              <h2 className="text-xl font-bold mb-4">Rejected Transactions</h2>
              <PastTransactionFileList filterStatus="refused" />
            </div>
        );
      case "paid":
        return (
            <div>
              <h2 className="text-xl font-bold mb-4">Paid Transactions</h2>
              <PastTransactionFileList filterStatus="paid" />
            </div>
        );
      default:
        return <div>Default content</div>;
    }
  };

  return (
      <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-none lg:rounded-xl border-0 lg:border-2 dark:border-0 mt-20 border-blue-100 shadow-sm min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
        <h1 className="text-primary-bluedark dark:text-gray-50 text-4xl uppercase font-bold pb-8">
          Invoices
        </h1>
        <FilterButtons onFilterChange={handleFilterChange} />
        <CreditProgressBar maxCredit={maxCredit} usedCredit={usedCredit} />

        <div className="mt-10">{renderContent()}</div>
      </div>
  );
};

export default FreightForwarderTransactions;
