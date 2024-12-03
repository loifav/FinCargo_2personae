// src/pages/Dashboard.tsx
import React from "react";
import TreeMapContainer from "@modules/home/components/treemapcontainer";

// Vous pouvez ajouter d'autres composants ou sections à votre dashboard ici
const Dashboard: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Titre du tableau de bord */}
      <h1 style={{ textAlign: "center", color: "#223c60" }}>Dashboard</h1>

      {/* Treemap Container avec des données */}
      <div style={{ marginTop: "20px" }}>
        <TreeMapContainer />
      </div>

    </div>
  );
};

export default Dashboard;

