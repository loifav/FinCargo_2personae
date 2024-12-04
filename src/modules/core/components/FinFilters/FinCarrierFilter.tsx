import React, { useEffect, useState } from "react";
import { FinDropdown } from "../FinDropdown";

interface Carrier {
  id: string;
  name: string;
}

interface FinCarrierFilterProps {
  value: string[];
  onChange: (value: string[]) => void;
  multiple?: boolean;
}

export const FinCarrierFilter: React.FC<FinCarrierFilterProps> = ({
  value,
  onChange,
  multiple = false,
}) => {
  const [carriers, setCarriers] = useState<Carrier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarriers = async () => {
      setLoading(true);
      try {
        // Simulation of an API call, in the future we will use a hook to fetch data
        const simulatedData: Carrier[] = [
          { id: "1", name: "Carrier 1" },
          { id: "2", name: "Carrier 2" },
          { id: "3", name: "Carrier 3" },
        ];
        setCarriers(simulatedData);
      } catch (error) {
        console.error("Failed to fetch carriers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarriers();
  }, []);

  const options = carriers.map((carrier) => ({
    label: carrier.name,
    value: carrier.id,
  }));

  const handleDropdownChange = (selectedValue: string | string[]) => {
    onChange(Array.isArray(selectedValue) ? selectedValue : [selectedValue]);
  };

  return (
    <div>
      {loading ? (
        <p className="text-gray-500 dark:text-gray-400">Loading carriers...</p>
      ) : (
        <FinDropdown
          data={options}
          label="Carriers"
          value={value}
          multiple={multiple}
          onChange={handleDropdownChange}
          onClear={() => onChange([])}
        />
      )}
    </div>
  );
};
