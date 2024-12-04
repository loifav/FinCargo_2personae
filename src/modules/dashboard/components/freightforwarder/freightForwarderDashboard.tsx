import React from "react";
import TreeMapContainer from "@modules/dashboard/components/freightforwarder/treemapcontainer";

const FreightForwarderDashboard: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Dashboard Title */}
      <h1
        style={{
          textAlign: "center",
          color: "#223c60",
          marginTop: "50px",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        Freight Forwarder Dashboard
      </h1>

      {/* Treemap Container */}
      <div style={{ marginTop: "20px" }}>
        <TreeMapContainer />
      </div>
    </div>
  );
};

export default FreightForwarderDashboard;
