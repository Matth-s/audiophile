const Gallery = ({ image }) => {
  return (
    <div className="gallery-container flex flex__spaceBtw">
      <img
        className="small border-radius"
        src={image.first.desktop}
        alt="gallery"
      />
      <img
        className="small border-radius"
        src={image.second.desktop}
        alt="gallery"
      />
      <img
        className="large border-radius"
        src={image.third.desktop}
        alt="gallery"
      />
    </div>
  );
};

export default Gallery;
