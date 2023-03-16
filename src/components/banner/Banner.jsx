import ArticlePresentation from "../article/ArticlePresentation";

const Banner = () => {
  const product = {
    slug: "xx99-mark-two-headphones",
    category: "headphones",
    new: true,
    name: "XX99 Mark II Headphones",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  };

  return (
    <div className="banner-container flex">
      <div className="banner-div">
        <ArticlePresentation presentation={product} />
      </div>
    </div>
  );
};

export default Banner;
