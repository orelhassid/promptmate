// GalleryItem.js
import React from "react";

const GalleryItem = ({ item, settings }) => {
  const { titleField, descriptionField, imageField, dateField } = settings;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={item[imageField]}
        alt={item[titleField]}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{item[titleField]}</h3>
        <p className="text-gray-700 mt-2">{item[descriptionField]}</p>
        <div className="mt-2">
          <span className="text-gray-500">
            {new Date(item[dateField]).toLocaleDateString()}
          </span>
        </div>
        <div className="mt-4">
          <button className="...">
            <svg>...</svg>
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
