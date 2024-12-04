import { useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";
import CarrierDashboard from "../components/carrier/CarrierDashboard";
import FreightForwarderDashboard from "../components/freightforwarder/freightForwarderDashboard";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const cards = [
    { title: "Total Users", value: 1200, color: "bg-blue-50" },
    {
      title: "Validated Invoices",
      value: 4,
      color: "bg-blue-50",
      border: "border-green-500",
      onClick: () => navigate("/invoices?tab=Validated"),
    },
    {
      title: "Pending Invoices",
      value: 75,
      color: "bg-blue-50",
      border: "border-yellow-500",
      onClick: () => navigate("/invoices?tab=Pending"),
    },
    { title: "Total Revenue", value: "$50,000", color: "bg-blue-50" },
  ];

  if (user.role === "carrier") {
    return <CarrierDashboard cards={cards} />;
  }

  if (user.role === "freight_forwarder") {
    return <FreightForwarderDashboard />;
  }

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-xl mt-20 border-2 border-blue-100 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Unauthorized
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        You do not have access to this page.
      </p>
    </div>
  );
};

export default Dashboard;
