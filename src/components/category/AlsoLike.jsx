import SeeProduct from "../button/SeeProduct";

const AlsoLike = ({ otherItem }) => {
  return (
    <section className="alsoLike-container flex flex__column flex__alignCenter">
      <img
        className="border-radius"
        src={otherItem.image.desktop}
        alt={`item ${otherItem.name}`}
      />
      <h6>{otherItem.name}</h6>
      <SeeProduct slugArticle={otherItem.slug} category={otherItem.category} />
    </section>
  );
};

export default AlsoLike;
