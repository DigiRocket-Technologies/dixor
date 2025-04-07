import { Link } from "react-router-dom";
interface DataType {
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

const SinglePriceV2New = ({ plan }: { plan: DataType }) => {
    const { title, description, features,blockedFeatures, priceOriginal, priceDiscounted, billingCycle } = plan;

    return (
        <>
            <div className="pricing-style-two">
                <div className="pricing-header">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                <ul>
                    {features.map((feature, index) => (
                        <li className="given" key={index}>
                            {  feature}
                        </li>
                    ))}
                     {blockedFeatures.map((feature, index) => (
                        <li className="blocked" key={index}>
                            {feature}
                        </li>
                    ))}
                </ul>
                
                   
               
                <div className="price">
                    <h2>
                        {priceOriginal && <del>${priceOriginal}</del>} ${priceDiscounted}
                        <sub> / {billingCycle}</sub>
                    </h2>

                </div>
                <Link className="btn mt-25 btn-sm circle btn-border dark effect" to="/contact-us">Get Started</Link>
            </div>
        </>
    );
};

export default SinglePriceV2New;