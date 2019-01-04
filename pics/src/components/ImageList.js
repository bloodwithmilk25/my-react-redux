import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
  // map every image obj to to ImageCard instance.
  // Passing single image as a prop to ImageCard
  // and then return list of ImageCards to App

  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
