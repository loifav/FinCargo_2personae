import React, { useState } from "react";
import FincargoContract from "./FincargoContract";
import { FiDownload } from "react-icons/fi";

export const AddInvoice: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/jpg",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a valid PDF, JPEG, or PNG file.");
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUploadClick = () => {
    const input = document.getElementById("invoice-upload") as HTMLInputElement;
    input.click();
  };

  const handleSaveClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto py-20 px-6 text-center bg-white dark:bg-gray-800 rounded-xl shadow-sm max-h-[100vh] overflow-auto">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 pb-8">
        Upload Invoice
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Please upload your invoice in PDF, JPEG, JPG or PNG format so we can
        provide you with a contract proposal.
      </p>
      <div className="flex flex-col items-center">
        {/* Hidden input */}
        <input
          id="invoice-upload"
          type="file"
          accept=".pdf, .jpeg, .png , .jpg"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Upload button */}
        <button
          type="button"
          onClick={handleUploadClick}
          className="px-6 py-3 flex items-center bg-primary-bluelight dark:bg-primary-bluedark text-white font-medium rounded-3xl hover:bg-primary-bluedark dark:hover:bg-gray-900"
        >
          {selectedFile ? "Change File" : "Select a File"}
          <FiDownload className="ml-2" />
        </button>

        {/* File info */}
        {selectedFile && (
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Selected File:{" "}
            <span className="font-semibold">{selectedFile.name}</span>
          </p>
        )}

        {/* Instructions */}
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Only PDF, JPEG, JPG or PNG files are accepted.
        </p>

        {/* Save button */}
        {selectedFile && (
          <button
            type="button"
            onClick={handleSaveClick}
            className="mt-6 px-10 py-3 bg-green-600 dark:bg-green-800 text-white font-medium rounded-3xl shadow hover:bg-green-700 dark:hover:bg-green-900"
          >
            Save
          </button>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && <FincargoContract closeModal={closeModal} />}
    </div>
  );
};
