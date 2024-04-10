import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Newsletter from "./includes/newsletter";

const Contact = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-8">
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              city: "",
              state: "",
              zip: "",
            }}
            validationSchema={Yup.object({
              firstname: Yup.string()
                .required("Sorry, this is required")
                .max(5, "Sorry the name is too long"),
              lastname: Yup.string().required("Sorry, this is required"),
              email: Yup.string()
                .required("Sorry, this is required")
                .email("Needs to be an email"),
            })}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <div className="container">
                <div className="col-md-12 mt-5">
                  <form onSubmit={handleSubmit}>
                    <h2 className="mb-3">Personal information</h2>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstname">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          name="firstname"
                          value={values.firstname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.firstname && touched.firstname ? (
                          <span>{errors.firstname}</span>
                        ) : null}
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastname">Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          name="lastname"
                          value={values.lastname}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.lastname && touched.lastname ? (
                          <span>{errors.lastname}</span>
                        ) : null}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <span>{errors.email}</span>
                      ) : null}
                    </div>

                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label htmlFor="state">State</label>
                        <select
                          className="form-control"
                          id="state"
                          name="state"
                          value={values.state}
                          onChange={handleChange}
                        >
                          <option value="">Choose...</option>
                          <option value="california">Delhi</option>
                          <option value="toronto">UP</option>
                          <option value="utrech">Rajasthan</option>
                        </select>
                      </div>

                      <div className="col-md-5 mb-3">
                        <label htmlFor="city">City</label>
                        <select
                          className="form-control"
                          id="city"
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                        >
                          <option value="">Choose...</option>
                          <option value="US">New Delhi</option>
                          <option value="CA">Noida</option>
                          <option value="NL">Jaipur</option>
                        </select>
                      </div>

                      <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          name="zip"
                          value={values.zip}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <hr className="mb-4" />
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Contact;
