import React, { useState } from "react";

function Forminfo() {
  const personalInfo = {
    firstName: "",
    lastName: "",
    dob: "",
    mobile: "",
    email: "",
    address: "",
  };

  const [PersonalData, setPersonalData] = useState(personalInfo);
  const [isSent, setIsSent] = useState(false);
  const [dataInput, setdataInput] = useState(false);

  const handleChange = (e) => {
    setPersonalData({ ...PersonalData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (e.target.value === "") {
      alert(`Please fill in the this field.`);
    } else {
      alert("Form submitted successfully !!");
      setIsSent(true);
    }
  };

  const handleDisplayData = () => {
    setdataInput(true);
  };

  return (
    <div>
      {isSent ? (
        <div>
          <h1 class="my-5 mx-3">Thank You for Your Submission!!</h1>

          {dataInput ? (
            <div class="mx-3">
              <h2>Your Entered Personal Information Data</h2>
              <p>First Name: {PersonalData.firstName}</p>
              <p>Last Name: {PersonalData.lastName}</p>
              <p>Email: {PersonalData.email}</p>
              <p>Phone: {PersonalData.mobile}</p>
              <p>Date of Birth: {PersonalData.dob}</p>
              <p>Address: {PersonalData.address}</p>
            </div>
          ) : null}

          {dataInput ? null : (
            <div>
              <button
                className="btn btn-danger mx-5"
                onClick={() => setIsSent(setPersonalData(personalInfo))}
              >
                Previous page
              </button>
              <button className="btn btn-danger" onClick={handleDisplayData}>
                Display details
              </button>
            </div>
          )}
        </div>
      ) : (
        <div class="container">
          <h2 class="py-1">Personal Info Form </h2>
          <h6 class="py-3">Please fill all the required field</h6>

          <form class="row row-cols-md-2 row-cols-sm-1" onSubmit={handleSubmit}>
            <div class="mb-3 ">
              <input
                type="text"
                class="form-control border-2 border-dark"
                placeholder="Firstname*"
                name="firstName"
                value={PersonalData.firstName}
                onChange={handleChange}
                pattern="[A-Za-z]+"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control border-2 border-dark"
                placeholder="Lastname*"
                name="lastName"
                value={PersonalData.lastName}
                onChange={handleChange}
                pattern="[A-Za-z]+"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control border-2 border-dark"
                placeholder="Email*"
                name="email"
                value={PersonalData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div class="mb-3">
              <input
                type=""
                class="form-control border-2 border-dark"
                placeholder="Phone*"
                name="mobile"
                value={PersonalData.mobile}
                onChange={handleChange}
                pattern="[0-9]*"
                required
              />
            </div>
            <div class="mb-3">
              <input
                type=""
                class="form-control border-2 border-dark"
                placeholder="Date of Birth *"
                name="dob"
                value={PersonalData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="address"
                class="form-control border-2 border-dark"
                placeholder="Address*"
                name="address"
                value={PersonalData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div class="form-check-md p-3">
              <input
                class="form-check-input p-3 m ms-sm-0"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                required
              />
              <label class="p-2" for="flexCheckDefault">
                Above mention detainls are correct
              </label>
            </div>
            <div class="m-1">
              <button
                type="submit"
                class="btn btn-danger"
                onsubmit={handleSubmit}
              >
                
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Forminfo;
