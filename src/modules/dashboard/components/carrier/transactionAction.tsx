// TransactionActions.tsx
interface TransactionActionsProps {
  actions: { label: string; onClick: () => void }[];
}

const TransactionActions: React.FC<TransactionActionsProps> = ({ actions }) => {
  return (
    <div className="flex space-x-4">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          className="bg-[#5885af] text-white px-4 py-2 rounded hover:bg-[#4f7a96] focus:outline-none focus:ring-2 focus:ring-[#4f7a96]"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default TransactionActions;
