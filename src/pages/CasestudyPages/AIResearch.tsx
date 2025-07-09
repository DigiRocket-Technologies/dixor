import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Helmet } from "react-helmet-async";
import LayoutV1 from "../../components/layouts/LayoutV1";
import DarkClass from "../../components/classes/DarkClass";
import banner6 from "/assets/img/services/woo commerce banner.jpg";


const AIResearch = () => {

 




  return (
    <>
      <Helmet>
        <title>Explore Dropshipping Services for Entrepreneurs | DigiRocket</title>
        <meta name="description" content="DigiRocket offers comprehensive dropshipping services, including product research, supplier sourcing, custom store development, and branding, to help entrepreneurs."></meta>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="AI Reasearch Case Study"
          breadCrumb=" AI Reasearch Case Study"
          LightMode={false}
        />
        <div style={{ width: "95%", margin: "auto" }} className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={banner6} alt="Thumb" />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-center">
            Case Studies
          </h2>
          <div className="container-fluid p-4 d-flex gap-10 justify-content-between" style={{ width: "100%" }}>

            <div style={{ width: "40%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
              {/* Image Section */}
              <div className="">
                <img
                  src="/assets/img/portfolio/gk-thumb.jpg"
                  alt="Download content preview"
                  className="img-fluid rounded shadow-lg"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>

              {/* Download Button Section */}
              <a href="/assets/img/portfolio/Gourmetkitchenworks AI Overview 1.pptx" download={true}>
                <div className=" text-center text-md">
                  <div

                    className="d-inline-flex mt-4 align-items-center justify-content-center px-4 py-3"
                    style={{
                      backgroundColor: '#c9f21d',
                      border: '2px solid #c9f21d',
                      color: '#000000',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(201, 242, 29, 0.3)',
                      minWidth: '200px'
                    }}
                    onMouseEnter={(e: any) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.backgroundColor = '#b8e019';
                      e.target.style.boxShadow = '0 6px 20px rgba(201, 242, 29, 0.5)';
                    }}
                    onMouseLeave={(e: any) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = '#c9f21d';
                      e.target.style.boxShadow = '0 4px 15px rgba(201, 242, 29, 0.3)';
                    }}
                  >
                    <span className="me-2">View</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </div>


                </div>
              </a>
            </div>
            <div style={{ width: "40%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              {/* Image Section */}
              <div className="">
                <img
                  src="/assets/img/portfolio/rehisk-thumb.jpg"
                  alt="Download content preview"
                  className="img-fluid rounded shadow-lg"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>

              {/* Download Button Section */}
              <a href="/assets/img/portfolio/Rehisk AI Case study 1.pptx" download={true}>
                <div className="col-12 mt-4 col-md-6 col-lg-5 rounded-circle text-center text-md">
                  <div
                    className="d-inline-flex align-items-center justify-content-center px-4 py-3"
                    style={{
                      backgroundColor: '#c9f21d',
                      border: '2px solid #c9f21d',
                      color: '#000000',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(201, 242, 29, 0.3)',
                      minWidth: '200px'
                    }}
                    onMouseEnter={(e: any) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.backgroundColor = '#b8e019';
                      e.target.style.boxShadow = '0 6px 20px rgba(201, 242, 29, 0.5)';
                    }}
                    onMouseLeave={(e: any) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.backgroundColor = '#c9f21d';
                      e.target.style.boxShadow = '0 4px 15px rgba(201, 242, 29, 0.3)';
                    }}
                  >
                    <span className="me-2">View</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default AIResearch;
