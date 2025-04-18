// /* eslint-disable no-unused-vars */

// import { toast } from "react-toastify";

// interface FormEventHandler {
//     (event: React.FormEvent<HTMLFormElement>): void;
// }

// const ContactForm = () => {

//     const handleForm: FormEventHandler =async (event) => {
//         event.preventDefault();
//         const form = event.target as HTMLFormElement;
//         const formData = new FormData(form);
//         console.log(formData);
//         return;

//         form.reset()
//         toast.success("Thanks For Your Email!")
//     }

//     return (
//         <>
//             <form className="contact-form contact-form" onSubmit={handleForm}>
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="form-group">
//                             <input className="form-control" id="name" name="name" placeholder="Name*" type="text" required autoComplete="off" />
//                             <span className="alert-error" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <div className="form-group">
//                             <input className="form-control" id="website" name="website" placeholder="Website*" type="url" required autoComplete="off" />
//                             <span className="alert-error" />
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <div className="form-group">
//                             <input className="form-control no-arrows" id="company_name" name="company_name" placeholder="Company Name" type=""  autoComplete="off" />
//                             <span className="alert-error" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <div className="form-group">
//                             <input className="form-control" id="email" name="email" placeholder="Email*" type="email" required autoComplete="off" />
//                             <span className="alert-error" />
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <div className="form-group">
//                             <input className="form-control no-arrows" id="phone" name="phone" placeholder="Phone*" type="number" required autoComplete="off" />
//                             <span className="alert-error" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="form-group comments">
//                             <textarea className="form-control" id="additional" name="additional" placeholder="Tell Us About Project "  autoComplete="off" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <button type="submit" name="submit" id="submit">
//                             <i className="fa fa-paper-plane" /> Get in Touch
//                         </button>
//                     </div>
//                 </div>

//                 {/* Alert Message */}
//                 <div className="col-lg-12 alert-notification">
//                     <div id="message" className="alert-msg" />
//                 </div>
//             </form>
//         </>
//     );
// };

// export default ContactForm;

/* eslint-disable no-unused-vars */
import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    website: "",
    company_name: "",
    email: "",
    phone: "",
    additional: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    

    const response=await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/sendcontactformmail`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formState)
    })

    const data=await response.json();

    console.log(data);

    return

    // Reset the form
    setFormState({
      name: "",
      website: "",
      company_name: "",
      email: "",
      phone: "",
      additional: "",
    });
     
    toast.success("Thanks For Your Email!");
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name*"
                type="text"
                required
                autoComplete="off"
                value={formState.name}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="website"
                name="website"
                placeholder="Website*"
                type="url"
                required
                autoComplete="off"
                value={formState.website}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control no-arrows"
                id="company_name"
                name="company_name"
                placeholder="Company Name"
                type="text"
                autoComplete="off"
                value={formState.company_name}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email*"
                type="email"
                required
                autoComplete="off"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control no-arrows"
                id="phone"
                name="phone"
                placeholder="Phone*"
                type="tel"
                required
                autoComplete="off"
                value={formState.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea
                className="form-control"
                id="additional"
                name="additional"
                placeholder="Tell Us About Project"
                autoComplete="off"
                value={formState.additional}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <button type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane" /> Get in Touch
            </button>
          </div>
        </div>

        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg" />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
