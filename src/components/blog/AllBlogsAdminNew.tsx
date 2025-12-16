import { Helmet } from "react-helmet-async";
// import AllBlogPagesContentAdmin from "../../components/blog/AllBlogsContentAdmin";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import AllBlogsAdminNew from "./AllBlogsAdminContentNew";

const AllBlogPagesAdmin = () => {
    return (
        <>
            <Helmet>
                <title>Blogs | DigiRocket Technologies</title>
                <link rel="canonical" href="https://digirocket.io/admin/blogs" />
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Blogs' breadCrumb='Blogs' />
                <AllBlogsAdminNew sectionClass='default-padding-bottom' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default AllBlogPagesAdmin;

