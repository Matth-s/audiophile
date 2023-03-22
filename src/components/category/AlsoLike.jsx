import SeeProduct from "../button/SeeProduct";
import { useEffect, useState } from "react";

const AlsoLike = ({ otherItem }) => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [image, setImage] = useState();

  useEffect(() => {
    const handleResize = () => setPageWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    switch (true) {
      case pageWidth > 575:
        setImage(otherItem.image.desktop);
        break;
      default:
        setImage(otherItem.image.mobile);
        break;
    }
  }, [pageWidth, otherItem]);

  return (
    <section className="alsoLike-container flex flex__column flex__alignCenter">
      <img
        className="border-radius"
        src={image}
        alt={`item ${otherItem.name}`}
      />
      <h6>{otherItem.name}</h6>
      <SeeProduct slugArticle={otherItem.slug} category={otherItem.category} />
    </section>
  );
};

export default AlsoLike;
