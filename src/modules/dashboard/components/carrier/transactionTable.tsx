// TransactionTable.tsx
import TransactionActions from "./transactionAction";
import { PictureAsPdf } from "@mui/icons-material";
import transactionData from "../../../../mocks/transaction.json";

interface Transaction {
  id: string;
  amount: number;
  invoiceUrl: string;
  actions: { label: string; onClick: () => void }[];
}

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  return (
    <table className="min-w-full table-auto mt-6 border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
            TransactionId
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
            Amount
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
            Actions
          </th>
          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
            Invoice
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id} className="border-t">
            <td className="px-4 py-2 text-sm text-gray-800">
              {transaction.id}
            </td>
            <td className="px-4 py-2 text-sm text-gray-800">
              {transaction.amount}
            </td>
            <td className="px-4 py-2">
              <TransactionActions actions={transaction.actions} />
            </td>
            <td className="px-4 py-2">
              <a
                href={transaction.invoiceUrl}
                className="text-[#5885af] hover:text-[#4f7a96]"
              >
                <PictureAsPdf style={{ fontSize: "24px" }} />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
