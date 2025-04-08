import React, { useState } from "react";

const ImageUploader = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      onImageUpload(file);
    }
  };

  return (
    <div className="text-center p-4 border-2 border-dashed rounded-md">
      <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="fileInput" />
      <label htmlFor="fileInput" className="cursor-pointer px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
        Upload Image
      </label>
      {image && <img src={image} alt="Uploaded" className="mt-4 max-w-full h-auto mx-auto rounded-md" />}
    </div>
  );
};

export default ImageUploader;
