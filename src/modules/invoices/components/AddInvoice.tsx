import React, { useState } from "react";

export const AddInvoice: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type !== "application/pdf") {
        alert("Please upload a valid PDF file.");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUploadClick = () => {
    const input = document.getElementById("invoice-upload") as HTMLInputElement;
    input.click();
  };

  return (
    <div className="mx-auto py-20 px-6 text-center bg-white dark:bg-gray-800 rounded-3xl shadow-sm max-h-[100vh] overflow-auto">
      <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 pb-8">
        Upload Invoice
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Please upload your invoice in PDF format so we can provide you with a
        contract proposal.
      </p>
      <div className="flex flex-col items-center">
        {/* Hidden input */}
        <input
          id="invoice-upload"
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Upload button */}
        <button
          type="button"
          onClick={handleUploadClick}
          className="px-6 py-3 bg-primary-bluedark text-white font-medium rounded-3xl shadow hover:bg-primary-bluelight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          {selectedFile ? "Change File" : "Select a File"}
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
          Only PDF/JPEG/PNG files are accepted.
        </p>
      </div>
    </div>
  );
};
