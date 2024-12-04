import { useNavigate } from "react-router-dom";
import { Invoice } from "../../../../../types/InvoiceTypes";
import transactionData from "../../../../../mocks/transaction.json";

const DueOverdue = () => {
  const invoices: Invoice[] = transactionData.invoices;

  const navigate = useNavigate();

  const hardcodedDays = [5, -3, 10, -7, 2];

  const viewInvoiceDetails = (id: number) => {
    navigate(`${id}`);
  };

  const reportInvoice = (id: number) => {
    alert(`Invoice ${id} reported.`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Due and Overdue</h2>

      {/* Table of invoices */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left text-sm font-semibold">
              Invoice ID
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold">
              Amount
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold">
              Carrier Name
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold">
              Days (+/-)
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold">
              View PDF
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold">
              View Details
            </th>
            <th className="py-2 px-4 text-left text-sm font-semibold">
              Report
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index} className="border-t border-gray-200">
              <td className="py-2 px-4 text-sm">{invoice.id}</td>
              <td className="py-2 px-4 text-sm">
                ${invoice.invoice_amount.toFixed(2)}
              </td>
              <td className="py-2 px-4 text-sm">{invoice.carrier_name}</td>
              <td className="py-2 px-4 text-sm">
                {hardcodedDays[index]
                  ? hardcodedDays[index] > 0
                    ? `+${hardcodedDays[index]} days`
                    : `${hardcodedDays[index]} days`
                  : "N/A"}
              </td>
              <td className="py-2 px-4 text-sm">
                {invoice.document_download_link && (
                  <a
                    href={invoice.document_download_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View PDF
                  </a>
                )}
              </td>
              <td className="py-2 px-4 text-sm">
                <button
                  onClick={() => viewInvoiceDetails(invoice.id)}
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  View Details
                </button>
              </td>
              <td className="py-2 px-4 text-sm">
                <button
                  onClick={() => reportInvoice(invoice.id)}
                  className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DueOverdue;
