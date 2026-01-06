
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";


const services = [
    { name: "semrush", img: "/assets/img/partner/certifications/semrush.svg" },
    {name:"shopify",img:"/assets/img/partner/certifications/shopify partners.png"},
    { name: "meta", img: "/assets/img/partner/certifications/meta.svg" },
    { name: "gcp", img: "/assets/img/partner/certifications/gcp.svg" },
    { name: "bsp", img: "/assets/img/partner/certifications/bsp.svg" }
];


type PdfKey = keyof typeof pdfsList;
const pdfsList = {
    "semrush": ["/assets/pdf/semrush/1.pdf", "/assets/pdf/semrush/2.pdf", "/assets/pdf/semrush/3.pdf"],
    "shopify":[],
    "meta": [],
    "gcp": [],
    "bsp": [],
}

const CertificateSlider = () => {
    
    const isMobile=window.innerWidth<=768
    const [showModal, setShowModal] = useState(false);
    const [selectedPDF, setSelectedPDF] = useState("");
    const [pdfs, setPdfs] = useState<string[]>([]);
    const [showButtons, setshowButtons] = useState(false);
    const [index, setIndex] = useState(0)

    const handlePdfs = (name: PdfKey) => {

        if(isMobile)
        return ;    

        setPdfs(() => [...pdfsList[name]]);
    }

    const closeModal = () => {
        setShowModal(false);
        setSelectedPDF("");
    };

    useEffect(() => {

 


        if (pdfs?.length > 0) {
            setIndex(0);
            setShowModal(true);
        }

        if (pdfs?.length > 1)
            setshowButtons(true)
        else
            setshowButtons(false)
    }, [pdfs])

    const nextPdf = () => {
        setIndex((prev) => (prev + 1) % pdfs.length);
    }

    const prevPdf = () => {

        if (index == 0)
            return;

        setIndex((prev) => (prev - 1) % pdfs.length);
    }

    useEffect(() => {
        if (index < pdfs.length) {
            console.log(index)
            setSelectedPDF(pdfs[index]);
        }
    }, [index, pdfs])


    return (
        <>
            <h2 className="text-center">Our Certifications and Expertise</h2>
            <div style={{ padding: "20px 0px" }} className="mt-6">
                <Swiper
                    className=""
                    loop={true}
                    centeredSlides={true}

                    speed={1000}
                    pagination={{
                        clickable: true,
                        type: "fraction",
                        el: ".banner-slide-pagination",
                    }}
                    navigation={{
                        nextEl: ".right",
                        prevEl: ".left",
                    }}
                    breakpoints={{
                        991: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            centeredSlides: false,
                        },
                        992: {
                            slidesPerView: 2.2,
                            spaceBetween: 50,
                        },
                        1400: {
                            slidesPerView: 3,
                            spaceBetween: 100,
                        },
                    }}
                    modules={[Pagination, Navigation, Keyboard, Mousewheel, Autoplay]}
                >
                    {services.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <img
                                src={item.img}
                                alt={`Certificate ${item?.name}`}
                                className="w-60 h-40 md-w-80 md-h-60 object-cover rounded cursor-pointer"
                                onClick={() => handlePdfs(item?.name as PdfKey)}
                            />
                        </SwiperSlide>
                    ))}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "40px",
                            gap: "10px",
                        }}
                        className="project-four-nav"
                    >
                        <div className="d-flex justify-content-center align-items-center gap-2 my-4">
                            <button className="left btn  border border-dark rounded-pill px-4 d-flex align-items-center">
                                <i className="fas fa-chevron-left me-2 text-dark"></i>
                            </button>
                            <button className="right btn  border border-dark rounded-pill px-4 d-flex align-items-center">
                                <i className="fas fa-chevron-right ms-2 text-dark"></i>
                            </button>
                        </div>
                    </div>
                </Swiper>
            </div>

            {/* Bootstrap Modal */}
            {showModal && (
                <div className="hide-scrollbar modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-xl modal-dialog-centered hide-scrollbar">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Certificate PDF</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body hide-scrollbar" style={{ height: "80vh" }}>
                                <iframe
                                    className="hide-scrollbar"
                                    src={`${selectedPDF}#toolbar=0&navpanes=0&scrollbar=0`}
                                    title="PDF Viewer"
                                    width="100%"
                                    height="100%"
                                    style={{ border: "none" }}
                                ></iframe>
                            </div>

                            {showButtons ? <div className="d-flex justify-content-center mt-2 gap-2" style={{ width: "100%" }}>
                                <button onClick={prevPdf}>Prev</button>
                                <button onClick={nextPdf}>Next</button>
                            </div> : ""}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CertificateSlider;
