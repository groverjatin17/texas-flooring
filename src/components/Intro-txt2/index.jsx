import { useEffect } from "react";
import Link from "next/link";
import addParlx from "../../common/addParlx";

const IntroTxt2 = () => {
  useEffect(() => {
    setTimeout(() => addParlx());
  }, []);

  console.log("rendering intro text 2");
  return (
    <header
      className="slider simpl fixed-slider bg-img valign"
      style={{ backgroundImage: "url(/img/slid/yo1.jpg)" }}
      data-overlay-dark="6"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption center mt-50">
              <h6>QUALITY FLOORS</h6>
              <h1>TEXAS FLOORING</h1>
              <p>
                Premium floors with best prices, serving Canadians since 1952.
              </p>
              <Link href="/contact/contact-us">
                <a className="btn-curve btn-lit mt-40">
                  <span>Know more about us</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt2;
