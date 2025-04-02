import FooterV4 from "../footer/FooterV4";
import HeaderV7 from "../header/HeaderV7";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1Light = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="smooth-scroll-container">
                <HeaderV7 lightMode={true} />
                {children}
                <FooterV4 lightMode={true} sectionClass='bg-gray' />
            </div>
        </>
    );
};

export default LayoutV1Light;