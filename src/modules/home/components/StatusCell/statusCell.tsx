import React from "react";
import { Cell } from "recharts";
import { Link } from "react-router-dom";

interface StatusCellProps {
  count: number;
  link: string;
  fill: string;
  name: string;
  value:string;

}

const StatusCell: React.FC<StatusCellProps> = ({ count, link, fill, name, value }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <Cell fill={fill} style={{ cursor: "pointer" }}>
        
      </Cell>
    </Link>
  );
};

export default StatusCell;
