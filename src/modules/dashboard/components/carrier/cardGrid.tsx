import React from "react";

interface Card {
  title: string;
  value: string | number;
  color: string;
  border?: string;
  onClick?: () => void;
}

interface CardGridProps {
  cards: Card[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="p-5 h-full bg-gray-50 dark:bg-gray-700 rounded-xl mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center p-6 rounded-xl text-gray-800 dark:text-gray-50 ${
              card.color
            } ${card.border || ""}`}
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

export default CardGrid;
