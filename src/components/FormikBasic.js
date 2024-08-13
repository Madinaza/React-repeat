import React from "react";
import { Formik } from "formik";

function FormikBasic() {
  return (
    <div>
      <h1>Hello Formik</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          hobies: [],
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              autoComplete="off"
            />
            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              autoComplete="off"
            />
            <br />
            <br />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              autoComplete="off"
            />

            <br />
            <br />

            <span>Gender:</span>
            <br />

            <span>Female</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            <span>Male</span>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />

            <br />
            <br />

            <div>
              Footboll
              <input
                type="checkbox"
                name="hobies"
                value="footboll"
                onChange={handleChange}
              />
            </div>
            <div>
              Cinema
              <input
                type="checkbox"
                name="hobies"
                value="cinema"
                onChange={handleChange}
              />
            </div>
            <div>
              Programming
              <input
                type="checkbox"
                name="hobies"
                value="programming"
                onChange={handleChange}
              />
            </div>

            <br />
            <button type="submit">Submit</button>

            {JSON.stringify(values)}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FormikBasic;
