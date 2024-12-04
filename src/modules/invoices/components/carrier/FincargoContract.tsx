import React from "react";

interface FincargoContractProps {
  closeModal: () => void;
}

const FincargoContract: React.FC<FincargoContractProps> = ({ closeModal }) => {
  const contractDetails = [
    { label: "Base Fee", amount: "200.00 €" },
    { label: "Processing Fee", amount: "50.00 €" },
    { label: "Tax", amount: "20.00 €" },
    { label: "Total Amount", amount: "270.00 €" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 ">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full shadow-lg mx-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Contract Proposal
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your uploaded invoice has been processed. Please review the contract
          details below.
        </p>
        <ul className="text-left mb-6">
          {contractDetails.map((detail, index) => (
            <li
              key={index}
              className="flex justify-between text-gray-800 dark:text-gray-200 mb-2"
            >
              <span>{detail.label}</span>
              <span>{detail.amount}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-end space-x-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-3xl hover:bg-gray-400 dark:hover:bg-gray-600 "
          >
            Cancel
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-primary-bluelight text-white rounded-3xl hover:bg-primary-bluedark dark:bg-primary-bluedark dark:hover:bg-gray-900"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default FincargoContract;
