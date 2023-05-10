// CollectionGallery.js
import React from "react";
import useCollection from "../context/useCollection";
import GalleryItem from "./GalleryItem";

const Gallery = ({ fields }) => {
  const { data, onItemClick } = useCollection();

  // Define the settings for the GalleryItem component
  const settings = {
    titleField: "title", // Replace with the desired field from your data
    descriptionField: "description", // Replace with the desired field from your data
    imageField: "cover_image", // Replace with the desired field from your data
    dateField: "date", // Replace with the desired field from your data
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <GalleryItem key={item.id} item={item} settings={settings} />
      ))}
    </div>
  );
};

export default Gallery;
