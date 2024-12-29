import React, { useState } from 'react';

const PdfReader = () => {
  const [pdfFile, setPdfFile] = useState(null); // Store the selected PDF file
  const fileType = ['application/pdf']; // Allowed file types

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (fileType.includes(selectedFile.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPdfFile(e.target.result); // Set the PDF file as a data URL
        };
      } else {
        console.log('Please select a valid PDF file.');
        setPdfFile(null);
      }
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center font-sans p-4">
      <div className="mb-6">
        {/* Hidden File Input */}
        <input
          type="file"
          id="fileInput"
          accept="application/pdf"
          onChange={handleChange}
          className="hidden"
        />
        {/* Label Styled as Button */}
        <label
          htmlFor="fileInput"
          className="bg-purple text-white font-semibold py-2 px-4 rounded-lg cursor-pointer "
        >
          Choisir un fichier
        </label>
      </div>
      {pdfFile && (
        <div className="w-full max-w-4xl h-full flex-grow mt-6">
          <iframe
            src={pdfFile}
            title="PDF Preview"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default PdfReader;