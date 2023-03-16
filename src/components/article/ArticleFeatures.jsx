const ArticleFeatures = ({ description, includes }) => {
  return (
    <div className="articleFeatures-container flex flex__spaceBtw">
      <section className="features-section">
        <h3>FEATURES</h3>
        <p className="body1">{description}</p>
      </section>
      <ul>
        <h3>IN THE BOX</h3>
        {includes.map((include) => (
          <li className="flex" key={include.item}>
            <p className="quantity body1">{include.quantity}X</p>
            <p className="itemName body1">{include.item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleFeatures;
