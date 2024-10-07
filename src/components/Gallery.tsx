import LightGallery from "lightgallery/react";
import { Typography } from "@mui/material";

import "lightgallery/css/lightgallery.css";
import "../assets/style/Gallery.css";

const Gallery = () => {
  const images: string[] = [];

  return (
    <div style={{ padding: "4%" }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold", textAlign: "center" }} // Teal color for title
      >
        Gallery
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          paddingBottom: 5,
        }}
      >
        This is how variant-net was built
      </Typography>
      <LightGallery dynamic={true}>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </LightGallery>
    </div>
  );
};

export default Gallery;
