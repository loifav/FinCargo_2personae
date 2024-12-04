export const PendingInvoices: React.FC = () => {
  return (
    <div className="mx-auto py-20 px-6 text-center bg-white dark:bg-gray-800 rounded-3xl shadow-sm max-h-[100vh] overflow-auto">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 pb-8">
        Upload Invoice
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Please upload your invoice in PDF format so we can provide you with a
        contract proposal.
      </p>
    </div>
  );
};
