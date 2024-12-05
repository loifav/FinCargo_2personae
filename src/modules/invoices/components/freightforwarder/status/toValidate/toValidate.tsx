import React from "react";
import { transactionData } from "./data/transactionData";

interface Props {
    filterStatus: string;
}

const ToValidate: React.FC<Props> = ({ filterStatus }) => {
    const filteredTransactions = transactionData.filter((txn) => txn.status === filterStatus);

    if (filteredTransactions.length === 0) {
        return <div>No transactions found for the selected filter.</div>;
    }

    return (
        <div>
            {filteredTransactions.map((txn) => (
                <div
                    key={txn.id}
                    className="border p-4 mb-4 rounded-md shadow-sm bg-white dark:bg-gray-700"
                >
                    <p className="font-bold">Transaction ID: {txn.id}</p>
                    <p>Amount: ${txn.amount}</p>
                    <button
                        onClick={() => console.log(`Navigating to /transactions/${txn.id}`)}
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
};

export default ToValidate;
