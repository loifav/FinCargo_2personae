import React, { useState } from "react";
import { Treemap, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

const data = [
  { name: "Invoices to validate", count: 10, link: "/transactions", fill: "#223c60" },
  { name: "Invoices validated", count: 16, link: "/transactions", fill: "#223c60" },
  { name: "Invoices overdue", count: 10, link: "/transactions", fill: "#b30000" }, // Rouge foncé
  { name: "Invoices paid", count: 12, link: "/transactions", fill: "#006400" },
  { name: "Invoices due", count: 15, link: "/transactions", fill: "#cc7a00" }, // Orange foncé
];

const TreeMapContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (node: any) => {
    if (node.link) {
      navigate(node.link);
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "" }}>
      <ResponsiveContainer width="80%" height="80%">
        <Treemap
          data={data}
          dataKey="count"
          nameKey="name"
          aspectRatio={7 / 5}
          stroke="#fff"
          isAnimationActive={false}
          onClick={handleClick}
          content={<CustomCell />}
        />
      </ResponsiveContainer>
    </div>
  );
};

const CustomCell: React.FC<any> = (props) => {
  const { x, y, width, height, name, fill, count } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <g
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => console.log(`Clicked on ${name}`)}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke="#f0f4f8"
        style={{
          cursor: "pointer",
          transition: "transform 0.3s ease",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transformOrigin: `${x + width / 2}px ${y + height / 2}px`,
        }}
        rx={10}
        ry={10}
      />
      <text
        x={x + width / 2}
        y={y + height / 2 - 10}
        textAnchor="middle"
        fill="#fff"
        fontSize={24}
        fontWeight="bold"
        style={{
          fontFamily: "'Arial', sans-serif",
          pointerEvents: "none",
        }}
        dy={5}
      >
        {count}
      </text>
      <text
        x={x + width / 2}
        y={y + height / 2 + 10}
        textAnchor="middle"
        fill="#fff"
        fontSize={16}
        fontWeight="bold"
        style={{
          fontFamily: "'Arial', sans-serif",
          pointerEvents: "none",
        }}
        dy={5}
      >
        {name}
      </text>
    </g>
  );
};

export default TreeMapContainer;
