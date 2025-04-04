import FooterV4 from "../footer/FooterV4";
import HeaderV1 from "../header/HeaderV1";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1Light = ({ children }: LayoutProps) => {
    return (
        <>
            
            <div className="smooth-scroll-container">
                <HeaderV1/>
                {children}
                <FooterV4 lightMode={true} sectionClass='bg-gray' />
            </div>
        </>
    );
};

export default LayoutV1Light;