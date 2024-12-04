// src/modules/home/components/TreeMapContainer.tsx
import React from "react";
import { Treemap, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";
import { treemapData } from "@modules/home/components/data/treeMapData";  // Import des données depuis le fichier créé
import CustomCell from "@modules/home/components/customcell";  // Import du composant CustomCell

const TreeMapContainer: React.FC = () => {
  const navigate = useNavigate();

  // Fonction pour gérer le clic sur une cellule
  const handleClick = (node: any) => {
    if (node.link) {
      navigate(node.link);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <ResponsiveContainer width="80%" height="80%">
        <Treemap
          data={treemapData}  // Utilisation des données importées
          dataKey="count"
          nameKey="name"
          aspectRatio={7 / 5}
          stroke="#fff"
          isAnimationActive={false}
          onClick={handleClick}
          content={<CustomCell />}  // Utilisation du composant CustomCell
        />
      </ResponsiveContainer>
    </div>
  );
};

export default TreeMapContainer;
