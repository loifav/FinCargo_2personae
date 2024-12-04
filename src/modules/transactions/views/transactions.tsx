import { useSearchParams, useNavigate } from "react-router-dom";
import DueOverdue from "../components/status/dueOverdue/DueOverdue";
import FilterButtons from "@modules/transactions/components/filterButtons";
import { CreditProgressBar } from "@modules/transactions/components/TransactionMain/CreditProgressBar.tsx";

function Transactions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const filterStatus = searchParams.get("tab") || "toValidate"; // Défaut: toValidate

  const maxCredit = 5000;
  const usedCredit = 1500;

  const transactions = [
    {
      id: "1",
      amount: 1500,
      invoiceUrl: "#",
      actions: [
        { label: "Accepter", onClick: () => console.log("Accepter") },
        { label: "Rejeter", onClick: () => console.log("Rejeter") },
      ],
      status: "stillToValidate",
    },
    {
      id: "2",
      amount: 2000,
      invoiceUrl: "#",
      actions: [
        { label: "Accepter", onClick: () => console.log("Accepter") },
        { label: "Rejeter", onClick: () => console.log("Rejeter") },
      ],
      status: "stillToValidate",
    },
  ];

  const handleFilterChange = (filter: string) => {
    setSearchParams({ tab: filter });
  };

  const renderContent = () => {
    switch (filterStatus) {
      case "toValidate":
        return (
            <div>
              {transactions
                  .filter((txn) => txn.status === "stillToValidate")
                  .map((txn) => (
                      <div
                          key={txn.id}
                          className="border p-4 mb-4 rounded-md shadow-sm bg-white dark:bg-gray-700"
                      >
                        <p className="font-bold">Transaction ID: {txn.id}</p>
                        <p>Amount: ${txn.amount}</p>
                        <button
                            onClick={() => navigate(`/transactions/${txn.id}`)}
                            className="text-blue-500 underline"
                        >
                          View Invoice
                        </button>
                        <div className="mt-4 flex gap-2">
                          {txn.actions.map((action, idx) => (
                              <button
                                  key={idx}
                                  onClick={action.onClick}
                                  className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
                              >
                                {action.label}
                              </button>
                          ))}
                        </div>
                      </div>
                  ))}
            </div>
        );
      case "dueAndOverdue":
        return <DueOverdue />;
      case "refused":
        return <div>Transaction rejected</div>;
      case "paid":
        return <div>Transaction paid</div>;
      default:
        return <div>Default content</div>;
    }
  };

  return (
      <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-none lg:rounded-xl border-0 lg:border-2 dark:border-0 mt-20 border-blue-100 shadow-sm min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
        <h1 className="text-primary-bluedark dark:text-gray-50 text-4xl uppercase font-bold pb-8">
          Transactions
        </h1>
        <CreditProgressBar maxCredit={maxCredit} usedCredit={usedCredit} />
        <FilterButtons onFilterChange={handleFilterChange} />

        <div className="mt-10">{renderContent()}</div>
      </div>
  );
}

export default Transactions;
