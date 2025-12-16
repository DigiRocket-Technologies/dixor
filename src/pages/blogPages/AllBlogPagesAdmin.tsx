import { Helmet } from "react-helmet-async";
import AllBlogPagesContentAdmin from "../../components/blog/AllBlogsContentAdmin";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

const AllBlogPagesAdmin = () => {
    return (
        <>
            <Helmet>
                <title>Blogs | DigiRocket Technologies</title>
                <link rel="canonical" href="https://digirocket.io/admin/blogs" />
                <meta name="description" content="Admin dashboard for Digirocket Technologies to view, edit, publish, and manage all blog posts and content from a centralized system. Visit Now!"></meta>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Blogs' breadCrumb='Blogs' />
                <AllBlogPagesContentAdmin sectionClass='default-padding-bottom' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default AllBlogPagesAdmin;