/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const vinyls = [
  {
    name: "Blonde",
    img: "/img/portfolio/works/blonde.jpg",
    type: "Maple",
    dimensions: "4-1/4 inch",
    sku: "31000",
  },
  {
    name: "Biscotti",
    img: "/img/portfolio/works/biscotti.jpg",
    type: "Maple",
    dimensions: "4-1/4 inch",
    sku: "32000",
  },
];
const PortfolioTwoColumn = () => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="gallery full-width">
          {vinyls.map((product) => {
            return (
              <div className="col-md-6 items graphic" key={product.sku}>
                <div className="item-img wow fadeInUp relative" data-wow-delay=".4s">
                  {/* <Link href="/project-details/project-details-dark"> */}
                  <a>
                    <img src={product.img} alt="image" />
                  </a>
                  {/* </Link> */}
                  <div className="cont">
                    <h6>{product.name}</h6>
                    <span>
                      <a href="#0">{product.type}</a>,
                      <a href="#0">{product.dimensions}</a>,
                      <a href="#0">{product.sku}</a>
                    </span>
                  </div>
                  <div className="price">

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwoColumn;
