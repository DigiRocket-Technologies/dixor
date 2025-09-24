import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import CreativesPortfolio from "../../components/portfolio/CreativesPortfolio";

const CreativesPage = () => {
    return (
        <>
            <Helmet>
                <title>Creatives: Our Graphic Design & Visual Identity Showcase | DigiRocket</title>
                <meta name="description" content="Explore DigiRocket's creative portfolio featuring stunning graphic designs, brand identities, visual concepts, and creative solutions that make brands stand out."></meta>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Creatives' breadCrumb='Creatives' />
                <CreativesPortfolio hasShape={true} />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default CreativesPage;

