import React from 'react';

const DownloadButton: React.FC<{ fileName: string }> = ({ fileName }) => {
  const handleClick = () => {
    // Construct the URL of the PDF file
    const pdfUrl = `./Verification Form For Transportation Services More Than 25 Miles.pdf`;
    // Create a temporary anchor element
    const tempAnchor = document.createElement('a');
    tempAnchor.href = pdfUrl;
    tempAnchor.setAttribute('download', fileName);
    // Simulate a click to trigger the download
    tempAnchor.click();
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      Download PDF
    </button>
  );
};

export default DownloadButton;