import { useSearchParams } from "react-router-dom";
import DueOverdue from "../components/status/dueOverdue/DueOverdue";
import FilterButtons from "@modules/transactions/components/filterButtons";

function Transactions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterStatus = searchParams.get("tab") || "Overview";

  const handleFilterChange = (filter: string) => {
    setSearchParams({ tab: filter });
  };

  const renderContent = () => {
    switch (filterStatus) {
      case "toValidate":
        return <div>Transaction to validate</div>;
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

      <FilterButtons onFilterChange={handleFilterChange} />

      <div className="mt-10">{renderContent()}</div>
    </div>
  );
}

export default Transactions;
