


const Countries = () => {
  const countries = [
    {
      name: "United States",
      flag: "/assets/img/about/USA.png",
    },
    {
      name: "United Kingdom",
      flag: "/assets/img/about/united-kingdom.png",
    },
    {
      name: "Canada",
      flag: "/assets/img/about/cannada.png",
    },
    {
      name: "India",
      flag: "/assets/img/about/INDIA.png",
    },
    {
      name: "Australia",
      flag: "/assets/img/about/australia.png",
    },
    {
      name: "UAE",
      flag: "/assets/img/about/uae.png",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Countries We Proudly Serve In </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
        className="mt-10"
      >
        {countries.map((country, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div
              className="card shadow-sm bg-dark country-card"
              style={{
                backgroundImage: `url(${country.flag})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "150px",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
