import React, { useState } from 'react';

function Register() {
  // State to manage selected hobbies
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  // Handle checkbox changes
  const handleHobbyChange = (event) => {
    const { value, checked } = event.target;
    setSelectedHobbies(prev =>
      checked ? [...prev, value] : prev.filter(hobby => hobby !== value)
    );
  };

  return (
    <>
     

      

      <div className="untree_co-hero inner-page overlay" style={{ backgroundImage: "url('images/img-school-5-min.jpg')" }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center ">
                <div className="col-lg-6 text-center ">
                  <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Register</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-lg-8 mx-auto order-1" data-aos="fade-up" data-aos-delay="200">
              <form action="#" className="form-box">
                <div className="row">
                  <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                  <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                  <div className="col-12 mb-3">
                    <select className="form-control">
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12 mb-3">
                    <input type="date" className="form-control" placeholder="Date of Birth" />
                  </div>
                  <div className="col-12 mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-12 mb-3">
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                  </div>
                 
                  <div className="col-12 mb-3">
                    <select className="form-control">
                      <option value="">Country</option>
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      {/* Add more countries as needed */}
                    </select>
                  </div>
                  <div className="col-12 mb-3">
                    <select className="form-control">
                      <option value="">State</option>
                      <option value="state1">State 1</option>
                      <option value="state2">State 2</option>
                      {/* Add more states based on selected country */}
                    </select>
                  </div>
                  <div className="col-12 mb-3">
                  <select className="form-control">
                      <option value="">City</option>
                      <option value="city1">city 1</option>
                      <option value="city2">city 2</option>
                      {/* Add more states based on selected country */}
                    </select>
                   </div>
                  <div className="col-12 mb-3">
                    <input type="file" className="form-control"  accept="image/*" />
                  </div>
                  <div className="col-12 mb-3">
                    <fieldset>
                      <legend>Hobbies</legend>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="hobby1" value="hobby1" onChange={handleHobbyChange} />
                        <label className="form-check-label" htmlFor="hobby1">Hobby 1</label>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="hobby2" value="hobby2" onChange={handleHobbyChange} />
                        <label className="form-check-label" htmlFor="hobby2">Hobby 2</label>
                      </div>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="hobby3" value="hobby3" onChange={handleHobbyChange} />
                        <label className="form-check-label" htmlFor="hobby3">Hobby 3</label>
                      </div>
                      {/* Add more hobbies as needed */}
                    </fieldset>
                  </div>
                  <div className="col-12 mb-3">
                    <label className="control control--checkbox">
                      <span className="caption">Accept our <a href="/">terms and conditions</a></span>
                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>
                  </div>
                  <div className="col-12">
                    <input type="submit" value="Register" className="btn btn-primary" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 

      </>
  )
}


export default Register;
