import { useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";
import CardGrid from "../components/carrier/cardGrid";
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
    return <CardGrid cards={cards} />;
  }

  if (user.role === "freight_forwarder") {
    return <FreightForwarderDashboard />;
  }

  return (
    <div className="p-5 h-full bg-gray-50 dark:bg-gray-700 rounded-xl mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center p-6 rounded-xl text-gray-800 dark:text-gray-50 ${card.color}`}
            onClick={card.onClick}
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-3xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
