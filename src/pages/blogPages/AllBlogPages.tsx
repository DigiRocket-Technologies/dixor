import { Helmet } from "react-helmet-async";
import AllBlogPagesContent from "../../components/blog/AllBlogsContent";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

const AllBlogPages = () => {
    return (
        <>
            <Helmet>
                <title>DigiRocket Blog | Insights on Digital Marketing & Influencer Trends</title>
                <link rel="canonical" href="https://digirocket.io/blogs" />
                <meta name="description" content="Stay updated with the latest tips, trends, and strategies in digital marketing and influencer campaigns through the DigiRocket blog. Learn, grow, and innovate with us."></meta>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Blogs' breadCrumb='Blogs' />
                <AllBlogPagesContent sectionClass='default-padding-bottom' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default AllBlogPages;