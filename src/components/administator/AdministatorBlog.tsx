import DarkClass from "../classes/DarkClass";
import FooterV1 from "../footer/FooterV1";
import HeaderV1 from "../header/HeaderV1";
import "../../assets/css/administator.css";
import AdminBlogContent from "./AdminBlogContent";

const AdministatorBlog = () => {
    return (
        <>
            <HeaderV1 />
            <AdminBlogContent />
            <FooterV1 />
            <DarkClass />
        </>
    );
}

export default AdministatorBlog;
