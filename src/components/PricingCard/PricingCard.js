import PortableText from "react-portable-text";
import "./PricingCard.css";

export default function PricingCard(props) {
  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <h4>{props.title}</h4>
              <img className="img" src={props.logo} alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-company"></span>
                </div>
                <div className="a-size">
                  <PortableText content={props.description} className="size" />
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a className="cart" href="/contact">
                <span className="price">{"$" + props.price}</span>
                <span className="add-to-cart">
                  <span className="txt">Sign up</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
