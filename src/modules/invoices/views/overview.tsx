import React from "react";
import { InvoiceOverviewC } from "../components/carrier/InvoiceOverviewC";
import { InvoiceOverviewFF } from "../components/freightforwarder/InvoiceOverviewFF";

import { useAuth } from "@contexts/AuthContext";

const Overview: React.FC = () => {
  const { user } = useAuth();

  if (user.role === "carrier") {
    return <InvoiceOverviewC />;
  }

  if (user.role === "freight_forwarder") {
    return <InvoiceOverviewFF />;
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

export default Overview;
