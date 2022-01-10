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
                  <PortableText content={props.description} />

                  <span className="p-company"></span>
                </div>
                <div className="a-size">
                  Available sizes : <span className="size">S , M , L , XL</span>
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
                  <span className="txt">Add to cart</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function PricingCard(props) {
//   return (
//     <article className="pricingCard text-center" key={props.index}>
//       <h3>{props.title}</h3>
//       <img src={props.logo} alt="PricingLogo" />
//       <hr />
//       <h4>${props.price}</h4>
//       <PortableText content={props.description} />
//       <div className="container">
//         <Button href="/contact" className="btn btn-alternate">
//           Buy Now
//         </Button>
//       </div>
//     </article>
//   );
// }
