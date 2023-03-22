const Gallery = ({ image }) => {
  return (
    <div className="gallery-container flex">
      <div className=" flex flex__column">
        <img
          className="border-radius"
          src={image.first.desktop}
          alt="gallery"
        />

        <img
          className="border-radius"
          src={image.second.desktop}
          alt="gallery"
        />
      </div>

      <img
        className="large border-radius"
        src={image.third.desktop}
        alt="gallery"
      />
    </div>
  );
};

export default Gallery;
