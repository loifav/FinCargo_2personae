import React from "react";
import { Treemap, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

// Données statiques
const data = [
  { name: "Invoices to validate", count: 2, link: "/transactions", fill: "#223c60",value:3 },
  { name: "Invoices validated", count: 3, link: "/transactions", fill: "#223c60", value:4 },
  { name: "Invoices overdue", count: 2, link: "/transactions", fill: "#223c60",value:5 },
  { name: "Invoices paid", count: 4, link: "/transactions", fill: "#223c60" , value:6},
  { name: "Invoices due", count: 4, link: "/transactions", fill: "#223c60" , value:7},
];

const TreeMapContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (node: any) => {
    if (node.link) {
      navigate(node.link);
    }
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <Treemap
        data={data}
        dataKey="count"
        nameKey="name"
        aspectRatio={16 / 9}
        stroke="#fff"
        isAnimationActive={true}
        onClick={handleClick} // Gestion des clics
        content={<CustomCell />}
      />
    </ResponsiveContainer>
  );
};

// Composant personnalisé pour chaque cellule
const CustomCell = (props: any) => {
  const { x, y, width, height, name, fill,value } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke="#fff"
        style={{ cursor: "pointer" }}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor="middle"
        fill="#fff"
        fontSize={14}
      >
         {`${name} : ${value}`} {/* Formatage du texte */}
      </text>
    </g>
  );
};

export default TreeMapContainer;
