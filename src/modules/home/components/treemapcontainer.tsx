import React from "react";
import { Treemap, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

// Données statiques
const data = [
  { name: "Invoices to validate", count: 10, link: "/transactions", fill: "#223c60", },
  { name: "Invoices validated", count: 3, link: "/transactions", fill: "#223c60", },
  { name: "Invoices overdue", count: 2, link: "/transactions", fill: "#223c60",  },
  { name: "Invoices paid", count: 4, link: "/transactions", fill: "#223c60", },
  { name: "Invoices due", count: 4, link: "/transactions", fill: "#223c60",  },
];

const TreeMapContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (node: any) => {
    if (node.link) {
      navigate(node.link);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f4f8" }}>
      <ResponsiveContainer width="80%" height="80%">
        <Treemap
          data={data}
          dataKey="count"
          nameKey="name"
          aspectRatio={16 / 9}
          stroke="#fff"
          isAnimationActive={true}
          onClick={handleClick}
          content={<CustomCell />}
        />
      </ResponsiveContainer>
    </div>
  );
};

// Composant personnalisé pour chaque cellule
const CustomCell = (props: any) => {
  const { x, y, width, height, name, fill, count } = props;
  const padding = 0; // Suppression de l'espace entre les cellules

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke="#f0f4f8" // Couleur de fond identique à l'arrière-plan
        style={{ cursor: "pointer" }}
        rx={10}
        ry={10}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        fill="#fff"
        fontSize={14}
        dy={5} 
      >
        {`${name} : ${count}`}
      </text>
    </g>
  );
};

export default TreeMapContainer;
