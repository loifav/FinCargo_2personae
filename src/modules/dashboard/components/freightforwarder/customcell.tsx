// src/modules/home/components/CustomCell.tsx
import React, { useState } from "react";

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

export default CustomCell;
