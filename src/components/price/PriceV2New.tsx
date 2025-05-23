import SplitText from "../animation/SplitText.jsx";
import SinglePriceV2New from "./SinglePriceV2New.js";

interface pricingType {
  monthlyPlans?: PricingPlan[];
  yearlyPlans?: PricingPlan[];
  serviceId?: string;
}
interface PricingPlan {
  id: number;
  title: string;
  description: string;
  features: string[];
  blockedFeatures: string[];
  priceOriginal: number | null;
  priceDiscounted: number;
  currency: string;
  billingCycle: string;
}
interface pricingType {
  monthlyPlans?: PricingPlan[];
  yearlyPlans?: PricingPlan[];
  serviceId?: string;
}

interface pricingProps {
  pricing?: pricingType;
}

const PriceV2New = ({ pricing }: pricingProps) => {
  const { monthlyPlans, yearlyPlans, serviceId } = pricing || {};

  return (
    <>
      <div
        id="pricing"
        style={{ marginTop: "40px" }}
        className="pricing-style-two-area  bottom-less "
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">Best Pricing</h5>
                <h2 className="title">
                  <SplitText
                    delay={20}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                  >
                    Affordable pricing checkout Now
                  </SplitText>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="pricing-style-two-items">
            {serviceId !== "shopify-development"&&serviceId !== "woocommerce-development"&&serviceId!=="wordpress-development" ? (
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div
                    className="nav nav-tabs pricing-tab-navs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-id-1"
                      data-bs-toggle="tab"
                      data-bs-target="#tab1"
                      type="button"
                      role="tab"
                      aria-controls="tab1"
                      aria-selected="true"
                    >
                      <span>Monthly</span>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-id-2"
                      data-bs-toggle="tab"
                      data-bs-target="#tab2"
                      type="button"
                      role="tab"
                      aria-controls="tab2"
                      aria-selected="false"
                    >
                      <span>Yearly</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div
              className="tab-content pricing-tab-content"
              id="nav-tabContent"
            >
              {/* Monthly Tab */}
              <div
                className="tab-pane fade show active"
                id="tab1"
                role="tabpanel"
                aria-labelledby="nav-id-1"
              >
                <div className="row">
                  {monthlyPlans?.map((plan: PricingPlan) => (
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 mb-30"
                      key={plan.id}
                    >
                      <SinglePriceV2New plan={plan} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Yearly Tab */}
              <div
                className="tab-pane fade"
                id="tab2"
                role="tabpanel"
                aria-labelledby="nav-id-2"
              >
                <div className="row">
                  {yearlyPlans?.map((plan: PricingPlan) => (
                    <div
                      className="col-xl-4 col-lg-6 col-md-6 mb-30"
                      key={plan.id}
                    >
                      <SinglePriceV2New plan={plan} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceV2New;
