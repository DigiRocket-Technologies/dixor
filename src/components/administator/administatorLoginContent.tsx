

const AdministatorLoginContent = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: "93vh" }}>
            <form style={{ width: "100%", maxWidth: "500px", backgroundColor: "#2a2d32" }} className="p-4 rounded shadow d-flex justify-content-center flex-column">
                <h3 className="text-center mb-4">Admin Login</h3>
                <div className="form-group mb-3 text-start">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control form-control-administator" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mb-4 text-start">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control form-control-administator" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary mx-auto d-block" style={{ backgroundColor: "#275df5", width: "40%" }}>Submit</button>
            </form>
        </div>
    );
}

export default AdministatorLoginContent;
